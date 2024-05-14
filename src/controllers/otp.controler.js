import { OtpCode } from "../services/opt.services/otp.service.js";
import { validateEmail } from "../utils/utils.js";
export async function getOtpCode(req, res) {
	try {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
		);
		next();
		const email = req.body.email;
		if (validateEmail(email) === false) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid email parameter" });
		}
		const otpCode = await OtpCode(email);
		if (otpCode !== "") {
			return res
				.status(200)
				.json({ success: true, message: "OTP Sent to email" });
		}
		return res.status(500).json({
			success: false,
			message: "internal error occured, please try again later",
		});
	} catch (e) {
		console.log("execption caught in getOtpCode controler: ", e);
		return res.status(500).json({
			success: false,
			message: "internal error occured, please try again later",
		});
	}
}
