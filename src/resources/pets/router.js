const express = require("express");
const router = express.Router();

const { createOne, getAll } = require("./controller");

// Post
router.post("/", createOne);

// Get all
router.get("/" , getAll);

module.exports = router;
