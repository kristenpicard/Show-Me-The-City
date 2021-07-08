const router = require("express").Router();
const postController = require("../../controllers/postController");

router
  .route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

// Matches with "/api/posts/:location"
router
  .route("/loc/:location")
  .get(postController.findByLocation);

// Matches with "/api/posts/:location/:category"
router
  .route("/loc/:location/:category")
  .get(postController.findByCategory);

// Matches with "/api/posts/:userID"
router
  .route("/user/:userID")
  .get(postController.findUserRecs);

module.exports = router;
