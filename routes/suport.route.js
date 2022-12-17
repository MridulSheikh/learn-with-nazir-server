const express = require("express");
const router = express.Router();
const supportController = require("../controllers/suport.controller")

router
.route("/")
.post(supportController.createSupportController)
.get(supportController.getSupportController)

router
.route("/:id")
.delete(supportController.supportDeleteContorller)


module.exports=router