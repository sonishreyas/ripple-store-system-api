const express = require("express");

const serverless = require("serverless-http");

const app = express();
// Add headers before the routes are defined
var cors = require("cors");
app.use(cors({ origin: "*" }));

const router = express.Router();

router.get("/hi", (req, res) => {
	res.json({
		hello: "hi",
	});
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
