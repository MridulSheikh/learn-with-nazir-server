const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.controller")

router
.route("/")
.post(feedbackController.createFeedbackController)
.get(feedbackController.getFeedbackController)

router
.route("/:id")
.delete(feedbackController.feedbackDeleteContorller)


module.exports=router