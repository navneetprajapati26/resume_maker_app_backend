import express from "express";

import {
  addResume,
  deleteResume,
  getResume,
  getResumeById,
  updateResume,
} from "../controllers/resume_controller";

const resumeRouter = express.Router();

resumeRouter.get("/", getResume);
resumeRouter.get("/:id", getResumeById);
resumeRouter.post("/add", addResume);
resumeRouter.put("/update/:id", updateResume);
resumeRouter.delete("/delete/:id", deleteResume);

export default resumeRouter;
