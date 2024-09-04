import express, { Router } from "express";
import { postAnswer, deleteAnswer } from "../controllers/Answers.js";
import auth from "../Middleware/auth.js";

const router = express.Router();

router.patch("/post/:id", auth, postAnswer);
//Arti
router.patch("/delete/:id", auth, deleteAnswer);

export default router;