import { formatWeatherDegrees } from "../../utils/utils.js";

export default async function generateOtpCode(otp) {
	const part1 = await formatWeatherDegrees(getWeather("London"));
	const part2 = await formatWeatherDegrees(getWeather("Jerusalem"));
	const part3 = await formatWeatherDegrees(getWeather("bangkok"));
}
