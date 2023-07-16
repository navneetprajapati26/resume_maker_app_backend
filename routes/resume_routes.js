import express from "express";

import {
  addResume,
  deleteResume,
  getResume,
  updateResume,
} from "../controllers/resume_controller";

const resumeRouter = express.Router();

resumeRouter.get("/", getResume);
resumeRouter.post("/add", addResume);
resumeRouter.put("/update/:id", updateResume);
resumeRouter.delete("/delete/:id", deleteResume);

export default resumeRouter;
