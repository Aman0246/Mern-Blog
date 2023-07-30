const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const {verifyToken}=require('../JWT/Verify');
const { uploadFile } = require("../AWS/aws");
//CREATE POST
router.post("/",verifyToken ,async (req, res) => {
 
  
  try {
    if(req.file!=undefined){
      let userfound=await User.findOne({_id:req.userId})
      if(!userfound)return res.send({status:false,message:"usenotFound"})
      console.log(userfound)
      let awsUrl = await uploadFile(req.file);
      const user = await Post.create({
        title: req.body.title,
        desc: req.body.desc,
        photo:awsUrl,
        categories: req.body.categories,
        userId:req.userId,
        username:userfound.username,
        profilePic:req.body.profilePic
        
      });
      return res
      .status(200)
      .send({status:true,message:'Post Created',data:user})

    }
    
  } catch (error) {
    res.send({status:false,message:'crashed'})
  }

 
  });
  
  //UPDATE POST
  router.put("/:id",verifyToken, async (req, res) => {
    try {
      
      console.log(req.params.id)
      const post = await Post.findById(req.params.id);
      if (post.userId != req.userId)return res.send({status:false,message:'Not Authorised'})
      if(req.file==undefined){
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.send({ status: true, message: 'Post updated successfully', data: updatedPost });
          
      }
      if(req.file!=undefined){
        let awsUrl = await uploadFile(req.file);
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: { ...req.body, photo: awsUrl },
              },
              { new: true }
            );
            res.send({ status: true, message: 'Post updated successfully', data: updatedPost });
      }

    } catch (error) {
      res.send({status:false,message:'crashed'})
    }
  });
  
  //DELETE POST
  router.delete("/:id",verifyToken, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (post.userId === req.userId) {
        try {
          await Post.findByIdAndDelete({_id:post._id})
          res.send({status:true,message:"Post has been deleted..."})
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.send({status:false,message:"You can delete only your post!"})
      }
    } catch (err) {
      res.send({status:false,message:'crashed'})
    }
  });
  
  //GET POST
  router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.send({status:true,message:"post by id",data:post})
    } catch (err) {
      res.send({status:false,message:'crashed'})
    }
  });
  
  //GET ALL POSTS
  router.get("/", async (req, res) => {
    console.log('hellow')
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
      res.send({status:false,message:'crashed'})
    }
  });
module.exports = router;