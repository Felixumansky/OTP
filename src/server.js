import express from "express";
import "dotenv/config"; // import env
const port = process.env.PORT || 3000;
import cors from "cors";
var app = express();
import otpRouter from "./routes/opt.router.js";
app.use(cors()); // Use this after the variable declaration

app.use(express.json());
app.all(
	/^\/\.?env/i,
	(req, res) => {
		throw new NotFoundError();
	} // security measure atm
);

app.use("/api", otpRouter);

// // 	console.log("Express App running at http://127.0.0.1:5000/")// // });
app.listen(port, () => {
	console.log("server is listening on port:", port);
});
