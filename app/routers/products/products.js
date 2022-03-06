const express = require("express");
const router = express.Router();

// All routes here will be starting with /products.

router.get("/getall", (req, res) => {
	res.send("HELLO .....");
});

module.exports = router;
