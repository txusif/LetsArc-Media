import express from "express";
import { auth } from "../Middleware/index.js";
import { register, login, authenticated } from "../Services/auth.js";
import {
  createVideo,
  deleteVideo,
  getVideos,
  updateVideo,
  updateVideoStatus,
} from "../Services/video.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth", auth, authenticated);

router.post("/create-video", auth, createVideo);
router.get("/get-videos", auth, getVideos);
router.patch("/update-video", updateVideo);
router.patch("/update-video-status", auth, updateVideoStatus);
router.delete("/delete-video", auth, deleteVideo);

export default router;
