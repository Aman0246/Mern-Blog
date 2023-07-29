const mongoose = require("mongoose");


const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    postId: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
