const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const PublisherController= require("../controllers/PublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBook", bookController.createBook  )
router.post("/createPublisher", PublisherController.createpublisher  )
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.put("/updateB", bookController.updateB)
router.put("/updateBook", bookController.updateBook)


module.exports = router;