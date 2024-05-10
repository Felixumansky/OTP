import express from "express";
const otpRouter = express.Router();

otpRouter.get("/otp", function (req, res) {
	res.send("hello form otp");
});

export default otpRouter;
