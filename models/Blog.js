const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide blog title"],
      minLength: [10, "please provide 10 character title"],
      maxLength: [100, "your title too long"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "please provide blog slug"],
      minLength: [10, "please provide 10 character slug"],
      maxLength: [100, "your slug too long"],
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      name: String,
      email: String,
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
