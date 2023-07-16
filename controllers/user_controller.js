import User from "../models/user_model";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(200).json({ message: "no user found" });
  }
  return res.status(200).json({ users });
};

export const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  let existingUser;
  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({
      message: "no user Found",
    });
  }
  return res.status(200).json(existingUser);
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Already Exists! do login" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    resumes: [],
  });

  try {
    user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "Register succesfully do login" });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(200).json({ message: "couldnt find ID! do signup" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(200).json({ message: "Incotrrect password" });
  }
  return res.status(200).json(existingUser);
};
