import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  video_id: {
    type: String,
    required: true,
    unique: true,
  },
  client_email: {
    type: String,
    required: true,
  },
  video_title: {
    type: String,
    required: true,
  },
  video_description: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  date_started: {
    type: Date,
    default: new Date().toISOString(),
  },
  date_completed: {
    type: Date,
  },
});

const VideoModel = mongoose.model("Video", videoSchema);

export default VideoModel;
