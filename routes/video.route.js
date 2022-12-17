const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video.controller")

router
.route("/")
.post(videoController.createVideoController)
.get(videoController.getVideoController)

router
.route("/:id")
.get(videoController.getVideoByIdController)
.delete(videoController.videoDeleteContorller)
.patch(videoController.videoUpdateByIdController)

module.exports = router