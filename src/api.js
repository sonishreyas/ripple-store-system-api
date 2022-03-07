const express = require("express");

const serverless = require("serverless-http");

var cors = require("cors");
var app = express();

app.use(cors());

const router = express.Router();

router.get("/hi", (req, res) => {
	res.json({
		hello: "hi",
	});
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
