const {
    createFeedbackService,
    getFeedbackService,
    feedbackDeleteService,
  } = require("../services/feedback.services");
  
  exports.createFeedbackController = async (req, res) => {
    try {
      const result = await createFeedbackService(req.body);
      res.status(200).json({
        status: "success",
        message: "successfully send feedback",
      });
    } catch (error) {
      res.status(401).json({
        staus: "fail",
        message: "feedback not send",
        error: error.message,
      });
    }
  };
  
  exports.getFeedbackController = async (req, res) => {
    try {
      const user = await getFeedbackService(req.body);
      if (user.length === 0) {
        return res.status(404).json({
          status: "fail",
          messgae: "feedback not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "feedback successfully found",
        body: user,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "feedback not found",
      });
    }
  };
  
  exports.feedbackDeleteContorller = async (req, res) => {
    try {
      const result = await feedbackDeleteService(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(401).json({
          status: "false",
          message: "feedback not deleted",
        });
      }
      res.status(200).json({
        status: "success",
        message: "successfully message feedback",
      });
    } catch (error) {
      res.status(401).json({
        status: "false",
        message: "feedback not deleted",
      });
    }
  };
  