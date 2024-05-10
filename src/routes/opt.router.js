import express from "express";
import sendEmail from "../services/email.service/emailJet.js";
import { getWeather } from "../services/weather.service/weather.service.js";
import { sqlQuery } from "../db/query.db.js";
const otpRouter = express.Router();
otpRouter.get("/otp", async function (req, res) {
	//console.log("req.body", req.body);
	//sendEmail(req.body.email, "TODO");
	//await sqlQuery("");
	await getWeather();
	res.send("hello form otp");
});
export default otpRouter;
