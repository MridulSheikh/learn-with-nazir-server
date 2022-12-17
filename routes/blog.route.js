const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller")

router
.route("/")
.post(blogController.createBlogController)
.get(blogController.getBlogController)


router
.route("/:id")
.get(blogController.getBlogByIdController)
.patch(blogController.blogUpdateByIdController)
.delete(blogController.blogDeleteContorller)

module.exports=router