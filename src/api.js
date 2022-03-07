const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/hi", (req, res) => {
	res.json({
		hello: "hi",
	});
});

app.use("/.netlify/functions/api", router);

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*"); //If it doesn't work, change it to "*"
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type,token"
	);
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});
module.exports = app;
module.exports.handler = serverless(app);
