export async function getWeather(city) {
	try {
		const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERKEY}&q=${city}`;
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(
			"getWeather data: ",
			data.current.temp_c.toString().split(".")[0]
		);

		return data.current.temp_c.toString().split(".")[0];
	} catch (error) {
		console.log("Error fetching data from the API");
		return "Error fetching data from the API";
	}
}
