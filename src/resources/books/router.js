const express = require("express");
const router = express.Router();

const { createOne , getAll } = require("./controller");

//Post
router.post("/", createOne);

// Get all
router.get("/" , getAll);


// Route: '/books/fiction?topic=historical`
// router.get("/fiction", getFictionBooks)

// Route: '/books/non-fiction?topic=historical`
// router.get("/non-fiction", getNonFictionBooks)

// Route: '/books/fiction'
// Route: '/books/non-fiction'
// -- /books/author/name-of-author?order=recent that returns a specific authors' 
// books ordered by publicationDate with the most recent first (use ORDER in your SQL query)


module.exports = router;




