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
  .route("/:location")
  .get(postController.findByLocation);

module.exports = router;
