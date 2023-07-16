import express from "express";
import { getAllUser, login, signup } from "../controllers/user_controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/singup", signup);
router.post("/login", login);

export default router;
