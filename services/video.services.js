const Video = require("../models/Video");
const Week = require("../models/Week");

exports.createVideoService = async (data) => {
  const result = await Video.create(data);
  const { _id: videoId, week, name } = result;
  console.log(week)
  const res = await Week.updateOne(
    { _id: week.id },
    { $push: { video: { id: videoId, name: name } } }
  );
  return result
};

exports.getVideoService = async () => {
  return await Video.find({})
};

exports.getVideoByIdService = async (id) => {
  return await Video.findOne({ _id : id });
};

exports.videoUpdatebyIdService = async (id, data) => {
  return await Video.updateOne({ _id: id }, data, {
    runValidators: true,
  });
};

exports.videDeleteService = async (id) => {
  const result  = await Video.findOne({id})
  const {id : weekId} = result.week
  const week = await Week.findOne({_id : weekId})
  const fillter = await week.video.filter(wk => id != wk.id)
  await Week.updateOne({_id : weekId},{$set : {video : fillter}})
  return await Video.deleteOne({ _id: id });
};
