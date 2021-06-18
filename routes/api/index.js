const router = require("express").Router();
const bookRoutes = require("./books");

// BELOW EXAMPLE FROM GOOGLE BOOKS
// Book routes
router.use("/books", bookRoutes);

module.exports = router;
