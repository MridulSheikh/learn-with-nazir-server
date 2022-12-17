const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide your name"],
      trim: true,
      minLength: [5, "Name must be at least 5 characters"],
      maxLength: [100, "Name is to large"],
    },
    email: {
      type: String,
      validator: [validator.isEmail, "provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "please provide your email address"],
    },
    gender: {
      type: String,
      required: [true, "please provide your gender"],
      enum: ["male", "female"],
    },
    role :{
      type: String,
      default: "client",
      enum: ["admin", "client"]
    },
    status:{
      type: String,
      default : "active",
      enum : ["active", "blocked"]
    },
    course: [
      {
        name: String,
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports=User;