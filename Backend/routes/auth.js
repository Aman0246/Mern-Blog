const router = require("express").Router();
const User = require("../models/User");
const { hassPassword, compare } = require("../Bcrypt/Bcrypt");
const validator = require("validator");
const { uploadFile } = require("../AWS/aws");
//REGISTER
router.post("/register", async (req, res) => {
  try {
    let CheckUser = await User.findOne({ email: req.body.email })
    if (CheckUser) {
      return res
        .status(200)
        .send({ status: false, message: "unique Email/username required" });
    }
    if (!validator.isEmail(req.body.email)) {
      return res.status(200).send({ status: false, message: "invalid Email" });
    }
    console.log("awsUrl")
    let hpassword= await hassPassword(req.body.password)
    if(req.file!=undefined){
      let awsUrl = await uploadFile(req.file);
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hpassword,
        profilePic: awsUrl
      });
      return res
      .status(200)
      .send({ status: true, message: "Registerd", data: user });

    }
    
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hpassword,
      profilePic:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
    });
    return res
      .status(200)
      .send({ status: true, message: "Registerd", data: user });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!validator.isEmail(req.body.email)) {
      return res.status(200).send({ status: false, message: "invalid Email" });
    }
    if (!user)
      return res.status(200).send({ status: false, message: "Not Registerd" });

    let checkPassword = await compare(req.body.password, user.password);
    if (!checkPassword)
      return res.status(200).send({ status: false, message: "Wrong Password" });

    return res
      .status(200)
      .send({ status: true, message: "Login ok", data: user });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
