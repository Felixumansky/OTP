export async function getWeather(city) {
	try {
		const apiUrl = `http://api.weatherapi.com/v1/current.json?key=" +
			${process.env.WEATHERKEY}&q=${city}`;
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log("data: ", data.current.temp_c);
		return data;
	} catch (error) {
		res.status(500).json({ error: "Error fetching data from the API" });
	}
}
