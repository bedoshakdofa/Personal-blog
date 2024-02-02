const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
    blogname: {
        type: String,
        required: [true, "please provide blog name"],
        maxlength: 20,
        minlength: 5,
    },
    content: {
        type: String,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
