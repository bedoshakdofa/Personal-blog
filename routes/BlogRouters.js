const express = require("express");
const router = express.Router();
const BlogController = require("./../Controllers/BlogControllers");
router
    .route("/")
    .get(BlogController.GetAllBlog)
    .post(BlogController.createBlog);

router
    .route("/:id")
    .get(BlogController.getOneBlog)
    .patch(BlogController.updateBlog)
    .delete(BlogController.DeleteBlog);
module.exports = router;
