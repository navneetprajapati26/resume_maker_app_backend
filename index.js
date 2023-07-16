import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user_routes";
import resumeRouter from "./routes/resume_routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/resume", resumeRouter);

mongoose
  .connect(
    "mongodb+srv://navneetprajapati26:wCrBl6dfhSta9y9g@resume.bsawnvn.mongodb.net/resume?retryWrites=true&w=majority"
  )
  .then(() => app.listen(process.env.PORT || 5000))
  .then(() => console.log("connected and on 5000"))
  .catch((err) => console.log(err));
