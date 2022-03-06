const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
	path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

module.exports = {
	NODE_ENV: process.env.NODE_ENV || "sandbox",
	HOST: process.env.HOST,
	PORT: process.env.RIPPLE_STORE_SYS_API_PORT || "8091",
	BASE_PATH: process.env.BASE_PATH,
	API_VERSION: process.env.API_VERSION,
	MONGO_URL: process.env.MONGO_URL,
};
