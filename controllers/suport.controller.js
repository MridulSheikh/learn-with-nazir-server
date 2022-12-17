const {
    createSupportService,
    getSupportService,
    supportDeleteService,
  } = require("../services/suport.services");
  
  exports.createSupportController = async (req, res) => {
    try {
      const result = await createSupportService(req.body);
      res.status(200).json({
        status: "success",
        message: "successfully send message",
      });
    } catch (error) {
      res.status(401).json({
        staus: "fail",
        message: "message not send",
        error: error.message,
      });
    }
  };
  
  exports.getSupportController = async (req, res) => {
    try {
      const user = await getSupportService(req.body);
      if (user.length === 0) {
        return res.status(404).json({
          status: "fail",
          messgae: "supports not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "supports successfully found",
        body: user,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "supports not found",
      });
    }
  };
  
  exports.supportDeleteContorller = async (req, res) => {
    try {
      const result = await supportDeleteService(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(401).json({
          status: "false",
          message: "message not deleted",
        });
      }
      res.status(200).json({
        status: "success",
        message: "successfully message blog",
      });
    } catch (error) {
      res.status(401).json({
        status: "false",
        message: "message not deleted",
      });
    }
  };
  