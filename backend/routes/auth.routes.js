import express from "express";
import {login, logout, signup} from "../controllers/auth.controller.js";

const router = express.Router();

// router.get("/signup",signup);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

// router.get("/logout",logout);

export default router;