import express from "express";
import { register,login,logout,getProfile } from "../controllers/auth.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();


//public
router.post("/register",register);
router.post("/login",login);


//protected
router.post("/logout",protect,logout);
router.get("/profile",protect,getProfile);


export default  router;