const express = require("express");
const multer  = require('multer')
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const comments=require('./routes/comment')
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser')
dotenv.config();
var cors = require("cors");
app.use(express.json());
app.use(cors({ origin:CORSORIGIN, credentials: true }));

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

mongoose
  .connect(process.env.MONGOCONNECT)
  .then(() => console.log("MongoDb connected.."))
  .catch((err) => console.log(err));

//--------------------------------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination directory for uploaded files
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Set the filename for uploaded files
        cb(null, file.originalname);
    },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});
//--------------------------------------------------------------
app.use("/auth",upload.single('avatar'), authRoute);//avatar== input name same
app.use("/users",upload.single('avatar'), userRoute);
app.use("/posts",upload.single('avatar'), postRoute);
app.use("/comment", comments);
app.use("/categories", categoryRoute);


app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}......`);
});
