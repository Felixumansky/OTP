import express from "express";
import * as otpControler from "../controllers/otp.controler.js";

const otpRouter = express.Router();
otpRouter.post("/otp", otpControler.getOtpCode);
export default otpRouter;
