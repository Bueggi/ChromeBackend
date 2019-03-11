const { Video } = require("../models/index");

addNewVideo = async (ctx, next) => {
  const newVideo = await Video.create({
    id: ctx.request.body.videoId,
    title: ctx.request.body.title,
    YouTuber: ctx.request.body.channel
  });

  ctx.body = newVideo;
};

getVideo = async (ctx, next) => {
  ctx.body = await Video.find({ id: ctx.params.id });
};

paramsTest = (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
};

module.exports = {
  addNewVideo,
  paramsTest,
  getVideo
};
