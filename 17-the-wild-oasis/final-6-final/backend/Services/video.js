import VideoModel from "../Models/videoModel.js";
import UserModel from "../Models/userModel.js";
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../utils/index.js";

export const createVideo = async (req, res) => {
  const email = req.email;
  const { video_title } = req.body;

  try {
    const userExists = await UserModel.findOne({ client_email: email });

    if (!userExists) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const video = await VideoModel.create({
      video_id: uuidv4(),
      client_email: email,
      video_title,
    });

    res.status(201).json({ video });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getVideos = async (req, res) => {
  try {
    const email = req.email;

    const userExists = await UserModel.findOne({ client_email: email });

    if (!userExists) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const videos = await VideoModel.find({ client_email: email });

    res.status(200).json({ videos });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateVideo = async (req, res) => {
  const { video_id, email, video_title, video_description, video_url } =
    req.body;

  try {
    const userExists = await UserModel.findOne({ client_email: email });

    if (!userExists) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const video = await VideoModel.findOne({ video_id });

    if (!video) {
      return res.status(404).json({ message: "Video does not exist" });
    }

    const updatedVideo = await VideoModel.findOneAndUpdate(
      { video_id },
      {
        video_title,
        video_description,
        video_url,
        date_completed: formatDate(),
      },
      { new: true }
    );

    res.status(200).json({ updatedVideo });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateVideoStatus = async (req, res) => {
  const { video_id, status } = req.body;
  const email = req.email;

  try {
    const userExists = await UserModel.findOne({ client_email: email });

    if (!userExists) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const video = await VideoModel.findOne({ video_id });

    if (!video) {
      return res.status(404).json({ message: "Video does not exist" });
    }

    const updatedVideo = await VideoModel.findOneAndUpdate(
      { video_id },
      { status },
      { new: true }
    );

    res.status(200).json({ updatedVideo });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteVideo = async (req, res) => {
  const email = req.email;
  const { video_id } = req.body;

  try {
    const userExists = await UserModel.findOne({ client_email: email });

    if (!userExists) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const video = await VideoModel.findOne({ video_id: video_id });

    if (!video) {
      return res.status(404).json({ message: "Video does not exist" });
    }

    await VideoModel.findOneAndDelete({ video_id });

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
