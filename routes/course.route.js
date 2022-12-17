const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller")

router
.route("/")
.post(courseController.createCourseController)
.get(courseController.getCourseController)

router
.route("/:id")
.get(courseController.getCourseByIdController)
.patch(courseController.courseUpdateByIdController)
.delete(courseController.courseDeleteContorller)

module.exports=router