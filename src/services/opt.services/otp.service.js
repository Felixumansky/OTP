import {
	formatWeatherDegrees,
	addMinutes,
	formatToSqlDate,
	getRandomCity,
} from "../../utils/utils.js";
import {
	getUserQuery,
	insertUserQuery,
	insertUserOtpQuery,
	getUserOtpDetailsQuery,
	updateUserOtpQuery,
} from "../../db/queries.db.js";
import { getWeather } from "../weather.services/weather.service.js";
import { sqlQueryExecute } from "../../db/execute.db.js";
import { sendEmail } from "../email.services/emailJet.js";
export async function OtpCode(email) {
	try {
		console.log("otp service OtpCode started with email: " + email);
		let query = getUserQuery(email.toUpperCase());
		let user = await sqlQueryExecute(query);
		let otpCode = "";
		if (!user) {
			// new user
			query = insertUserQuery(email.toUpperCase());
			await sqlQueryExecute(query);
			query = getUserQuery(email.toUpperCase());
			user = await sqlQueryExecute(query);
			otpCode = await generateOtpCode();

			query = insertUserOtpQuery(user.id, otpCode);
			await sqlQueryExecute(query);
		} else if (isUserOptExpired(user.id)) {
			// opt code expired
			otpCode = await generateOtpCode();
			query = updateUserOtpQuery(user.id, otpCode, formatToSqlDate(new Date()));
			await sqlQueryExecute(query);
		} else {
			// otp code is in 5 minutes range
			query = getUserOtpDetailsQuery(user.id);
			const userOtpDetails = await sqlQueryExecute(query);
			otpCode = userOtpDetails.otp;
		}
		if (otpCode.length === 6) {
			await sendEmail(email, otpCode);
		} else {
			console.log("error getOtpCode servise, otpCode is invalid");
			return "error getOtpCode servise, otpCode is invalid";
		}
	} catch (e) {
		console.log("execption caught in getOtpCode servise: ", e);
	}
}

export async function generateOtpCode(otp) {
	try {
		const part1 = formatWeatherDegrees(await getWeather(getRandomCity()));
		const part2 = formatWeatherDegrees(await getWeather(getRandomCity()));
		const part3 = formatWeatherDegrees(await getWeather(getRandomCity()));
		console.log("generateOtpCode ", part1 + part2 + part3);
		return part1 + part2 + part3;
	} catch (e) {
		console.log("execption caught in generateOtpCode servise: ", e);
	}
}
async function isUserOptExpired(userId) {
	try {
		const query = getUserOtpDetailsQuery(userId);
		const userOtpDetails = await sqlQueryExecute(query);
		const date = new Date(userOtpDetails.createDate);
		const newDate = addMinutes(date, 5);

		if (newDate < Date.now()) {
			return true;
		}
		return false;
	} catch (e) {
		console.log("execption caught in isUserOptExpired servise: ", e);
	}
}
