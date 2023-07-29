const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const {verifyToken}=require('../JWT/Verify');
const { uploadFile } = require("../AWS/aws");
//CREATE POST
router.post("/",verifyToken ,async (req, res) => {
  console.log("req.userId",req.userId)
  
  try {
    if(req.file!=undefined){
      let awsUrl = await uploadFile(req.file);
      const user = await Post.create({
        title: req.body.title,
        desc: req.body.desc,
        photo:awsUrl,
        categories: req.body.categories,
        userId:req.userId
      });
      return res
      .status(200)
      .send({status:true,message:'Post Created',data:user})

    }
    
  } catch (error) {
    res.status(500).json(error);
  }

 
  });
  
  //UPDATE POST
  router.put("/:id",verifyToken, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.userId) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).send({status:true,message:"update ok",data:updatedPost})
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        
        res.send({status:false,message:"You can update only your post!"})
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE POST
  router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.userId) {
        try {
          await post.delete();
          res.send({status:true,message:"Post has been deleted..."})
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.send({status:false,message:"You can delete only your post!"})
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET POST
  router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.send({status:true,message:"post by id",data:post})
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL POSTS
  router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.send({status:true,message:"post are here",data:posts})
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;