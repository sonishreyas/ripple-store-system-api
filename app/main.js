const config = require("./configs/configs.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productsRoute = require("./routers/products/products.js");
const serverless = require("serverless-http");

// This define the basepath of the application
const basePath = config.BASE_PATH + "/" + config.API_VERSION;
app.use(bodyParser.json());

app.use(`${basePath}/products`, productsRoute);

mongoose
	.connect(config.MONGO_URL)
	.then(() => console.log("DB connection Successful"))
	.catch((err) => {
		console.log(err);
	});

app.get(`/api/${config.API_VERSION}/test`, () => {
	console.log("Test is successful");
});
app.listen(config.PORT, config.HOST, () => {
	console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});
