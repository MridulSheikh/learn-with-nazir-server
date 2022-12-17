const mongoose = require("mongoose")
const validator = require("validator")

const supportSchema = mongoose.Schema({
    email:{
        type: String,
        trim : true,
        validate : [validator.isEmail, "please provide a valid email"],
        required : [true, "please provide a valid email"]
    },
    reason : {
        type: String,
        trim : true,
        required : [true, "please give reason"]
    },
    user : {
        name : String,
        email: String,
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Support"
        }
    },
},{
    timestamps : true
})

const Support = mongoose.model("Support", supportSchema)

module.exports = Support;