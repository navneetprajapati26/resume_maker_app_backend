import express from "express";
import {
  getAllUser,
  getUserById,
  login,
  signup,
} from "../controllers/user_controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/singup", signup);
router.post("/login", login);

export default router;
