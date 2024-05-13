import { cities } from "../public/cities.js";
export function formatWeatherDegrees(degrees) {
	let res = degrees.toString();
	if (degrees.toString().includes("-")) {
		res = res.replace("-", "");
	}
	if (degrees.toString().length !== 2) {
		res = "0" + degrees;
	}
	return res;
}

export function validateEmail(email) {
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return emailPattern.test(email);
}

export function addMinutes(date, minutes) {
	date.setMinutes(date.getMinutes() + minutes);
	return date;
}

export function formatToSqlDate(date) {
	return (
		new Date().toLocaleDateString("en-US") +
		" " +
		new Date().toLocaleTimeString()
	);
}

export function getRandomCity() {
	const city = cities[Math.floor(Math.random() * cities.length)];
	return city;
}
