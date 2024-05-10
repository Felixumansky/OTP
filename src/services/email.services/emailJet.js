import Mailjet from "node-mailjet";

export default async function sendEmail(email, otpCode) {
	const mailjet = Mailjet.apiConnect(
		process.env.MJ_APIKEY_PUBLIC,
		process.env.MJ_APIKEY_PRIVATE,
		{
			config: {},
			options: {},
		}
	);

	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: "felix@agrox.io",
					Name: "Logent-systems",
				},
				To: [
					{
						Email: email,
						Name: "felix",
					},
				],
				Subject: "Logent-systems OTP code",
				TextPart: "",
				HTMLPart: "<h3>OTP code : " + otpCode + "</h3>",
				CustomID: "AppGettingStartedTest",
			},
		],
	});
	request
		.then((result) => {
			console.log(result.body);
		})
		.catch((err) => {
			console.log(err);
		});
}
