export async function getWeather(query) {
	try {
		const apiUrl =
			"http://api.weatherapi.com/v1/current.json?key=" +
			process.env.WEATHERKEY +
			"&q=london";
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log("data: ", data.current.temp_c);
	} catch (error) {
		res.status(500).json({ error: "Error fetching data from the API" });
	}
}
