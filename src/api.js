const express = require("express");

const serverless = require("serverless-http");

var app = express();
const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const router = express.Router();

router.get("/hi", (req, res) => {
	res.json({
		hello: "hi",
	});
});

app.use("/.netlify/functions/api", router);
app.listen(80, function () {
	console.log("CORS-enabled web server listening on port 80");
});
module.exports = app;
module.exports.handler = serverless(app);
