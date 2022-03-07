const express = require("express");

const serverless = require("serverless-http");

const app = express();
// Add headers before the routes are defined
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888");

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});
const router = express.Router();

router.get("/hi", (req, res) => {
	res.json({
		hello: "hi",
	});
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
