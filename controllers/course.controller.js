const {
    createCourseService,
    getCourseService,
    getCourseByIdService,
    courseUpdatebyIdService,
    courseDeleteService,
  } = require("../services/course.services");
  
  exports.createCourseController = async (req, res) => {
    try {
      const result = await createCourseService(req.body);
      res.status(200).json({
        status: "success",
        message: "successfully create course",
      });
    } catch (error) {
      res.status(401).json({
        staus: "fail",
        message: "course not created",
        error: error.message,
      });
    }
  };
  
  exports.getCourseController = async (req, res) => {
    try {
      const course = await getCourseService(req.body);
      if (course.length === 0) {
        return res.status(404).json({
          status: "fail",
          messgae: "course not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "courses successfully found",
        body: course,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "course not found",
      });
    }
  };
  
  exports.getCourseByIdController = async (req, res) => {
    try {
      const course = await getCourseByIdService(req.params.id);
      if (course === null) {
        return res.status(404).json({
          status: "fail",
          messgae: "course not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "course successfully found",
        body: course,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "course not found",
      });
    }
  };
  
  exports.courseUpdateByIdController = async (req, res) => {
    try {
      const result = await courseUpdatebyIdService(req.params.id, req.body);
      if (result.modifiedCount === 0) {
        return res.status(401).send({
          status: "fail",
          messgae: "course not changed",
        });
      }
      res.status(200).json({
        status: "success",
        message: "course successfully updated",
      });
    } catch (error) {
      res.status(401).json({
        status: "fail",
        messgae: "course not updated",
      });
    }
  };
  
  exports.courseDeleteContorller = async (req, res) => {
    try {
      const result = await courseDeleteService(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(401).json({
          status: "false",
          message: "course not deleted",
        });
      }
      res.status(200).json({
        status: "success",
        message: "successfully deleted course",
      });
    } catch (error) {
      res.status(401).json({
        status: "fail",
        message: "course not deleted",
      });
    }
  };
  