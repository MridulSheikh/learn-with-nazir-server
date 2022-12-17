const express = require("express");
const router = express.Router();
const weekController = require("../controllers/week.controller")

router
.route("/")
.post(weekController.createWeekController)
.get(weekController.getWeekController)

router
.route("/:id")
.get(weekController.getWeekByIdController)
.patch(weekController.weekUpdateByIdController)
.delete(weekController.weekDeleteContorller)

module.exports=router