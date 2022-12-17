const {
    createWeekService,
    getWeekService,
    getWeekByIdService,
    weekUpdatebyIdService,
    weekDeleteService,
  } = require("../services/week.services");
  
  exports.createWeekController = async (req, res) => {
    try {
      const result = await createWeekService(req.body);
      res.status(200).json({
        status: "success",
        message: "successfully create week",
      });
    } catch (error) {
      res.status(401).json({
        staus: "fail",
        message: "week not created",
        error: error.message,
      });
    }
  };
  
  exports.getWeekController = async (req, res) => {
    try {
      const week = await getWeekService();
      if (week.length === 0) {
        return res.status(404).json({
          status: "fail",
          messgae: "week not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "week successfully found",
        body: week,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "week not found",
      });
    }
  };
  
  exports.getWeekByIdController = async (req, res) => {
    try {
      const week = await getWeekByIdService(req.params.id);
      if (week === null) {
        return res.status(404).json({
          status: "fail",
          messgae: "course not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "week successfully found",
        body: week,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "week not found",
      });
    }
  };
  
  exports.weekUpdateByIdController = async (req, res) => {
    try {
      const result = await weekUpdatebyIdService(req.params.id, req.body);
      if (result.modifiedCount === 0) {
        return res.status(401).send({
          status: "fail",
          messgae: "week not changed",
        });
      }
      res.status(200).json({
        status: "success",
        message: "week successfully changed",
      });
    } catch (error) {
      res.status(401).json({
        status: "fail",
        messgae: "week not changed",
      });
    }
  };
  
  exports.weekDeleteContorller = async (req, res) => {
    try {
      const result = await weekDeleteService(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(401).json({
          status: "false",
          message: "week not deleted",
        });
      }
      res.status(200).json({
        status: "success",
        message: "successfully deleted week",
      });
    } catch (error) {
      res.status(401).json({
        status: "fail",
        message: "week not deleted",
      });
    }
  };