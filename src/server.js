import express from "express";
const port = process.env.PORT || 3000;
import "dotenv/config"; // import env

var app = express();
import otpRouter from "./routes/opt.router.js";
app.use(express.json());
app.all(
	/^\/\.?env/i,
	(req, res) => {
		throw new NotFoundError();
	} // security measure atm
);
app.get("/", function (req, res) {
	res.send("Hello World");
});

app.use("/api", otpRouter);

// var server = app.listen(5000, function () {
// 	console.log("Express App running at http://127.0.0.1:5000/");
// });

app.listen(port, () => {
	console.log("server is listening on port:", port);
});
