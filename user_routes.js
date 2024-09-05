import express from "express";
// import { register,login,logout, editProfile, updateProfilePicture, addressUpdate} from "../controllers/user_controller.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import upload from "../middlewares/multer.js";
import { login, logout, register } from "../controller/user_controller.js";


const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get('/logout',logout);


export default router ;