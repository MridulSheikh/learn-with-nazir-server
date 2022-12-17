const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      uinque: [true, "should provide a unique name"],
      required: [true, "please provide course name"],
    },
    no: Number,
    description: {
      type: String,
      required: [true, "please provide a description"],
    },
    week: [
      {
        name: String,
        no: Number,
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Week",
        },
      },
    ],
    user: [
      {
        name: {
          type: String,
        },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
