export async function formatWeatherDegrees(degrees) {
	let res = degrees;
	if (degrees.includes("-")) {
		res = res.replace("-", "");
	}
	if (degrees.Length !== 2) {
		res = "0" + degrees;
	}
	return res;
}
