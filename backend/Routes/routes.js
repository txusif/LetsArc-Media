import express from "express";
import { register, login } from "../Services/auth.js";
import { createVideo, getVideos, updateVideo } from "../Services/video.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/create-video", createVideo);
router.get("/get-videos", getVideos);
router.patch("/update-video", updateVideo);

export default router;
