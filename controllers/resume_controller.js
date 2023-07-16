import mongoose from "mongoose";
import Resume from "../models/resume_model";
import user_model from "../models/user_model";

export const getResume = async (req, res, next) => {
  let resume;
  try {
    resume = await Resume.find();
  } catch (err) {
    return console.log(err);
  }

  if (!resume) {
    return res.status(404).json({
      message: "no resume Found",
    });
  }
  return res.status(200).json({ resume });
};

export const addResume = async (req, res, next) => {
  const {
    personalInfo,
    objective,
    education,
    experience,
    skills,
    languages,
    certifications,
    references,
    projects,
    user,
  } = req.body;

  let existingUser;
  try {
    existingUser = await user_model.findById(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  if (!existingUser) {
    return res.status(400).json({ message: "Unable to find User by this id" });
  }

  const resume = new Resume({
    personalInfo,
    objective,
    education,
    experience,
    skills,
    languages,
    certifications,
    references,
    projects,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await resume.save({ session });
    existingUser.resumes.push(resume);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ resume });
};

export const updateResume = async (req, res, next) => {
  const {
    personalInfo,
    objective,
    education,
    experience,
    skills,
    languages,
    certifications,
    references,
    projects,
  } = req.body;

  const resumeId = req.params.id;
  let resume;
  try {
    resume = await Resume.findByIdAndUpdate(resumeId, {
      personalInfo,
      objective,
      education,
      experience,
      skills,
      languages,
      certifications,
      references,
      projects,
    });
  } catch (err) {
    return console.log(err);
  }

  if (!resume) {
    return res.status(200).json({ message: "Unabel to update resume" });
  }
  return res.status(200).json({ resume });
};

export const deleteResume = async (req, res, next) => {
  const resumeId = req.params.id;
  let resume;
  try {
    resume = await Resume.findByIdAndDelete(resumeId).populate("user");
    await resume.user.resumes.pull(resume);
    await resume.user.save();
  } catch (err) {
    return console.log(err);
  }

  if (!resume) {
    return res.status(200).json({ message: "Unabel to delete resume" });
  }
  return res.status(200).json({ message: "Resume delete succsefully" });
};
