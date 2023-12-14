const express = require("express");
const router = express.Router();
const testControls = require("../constrols/api/test.js");

router.get("/", testControls.homepage);

module.exports = router;
