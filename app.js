const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user.route");
const blogRoute = require("./routes/blog.route");
const supportRoute = require("./routes/suport.route");
const feedbackSupport = require("./routes/feedback.route");
const courseRoute = require("./routes/course.route");
const weekRoute = require("./routes/week.route");
const videoRoute = require("./routes/video.route")

// middleware
app.use(express.json());
app.use(cors());

// user route
app.use("/api/v1/user", userRoute);
// blog route
app.use("/api/v1/blog", blogRoute);
// support route
app.use("/api/v1/support", supportRoute);
// feedback route
app.use("/api/v1/feedback", feedbackSupport);
// course route
app.use("/api/v1/course", courseRoute);
// week route
app.use("/api/v1/week", weekRoute)
// video route
app.use("/api/v1/video", videoRoute)

module.exports = app;
