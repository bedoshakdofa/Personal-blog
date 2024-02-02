const Blog = require("./../models/blog");
const CatchAsync = require("./../utilites/CatchAsync");

exports.createBlog = CatchAsync(async (req, res, next) => {
    const blog = await Blog.create({
        blogname: req.body.blogname,
        content: req.body.content,
    });
    res.status(200).json({
        status: "sucess",
        data: {
            blog,
        },
    });
});

exports.DeleteBlog = CatchAsync(async (req, res, next) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "sucess",
        message: "deleted sucessfully",
    });
});

exports.updateBlog = CatchAsync(async (req, res, next) => {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedBlog) {
        return next(new Error("the blog with this id wasn't find"));
    }
    updatedBlog.updatedAt = Date.now();
    await updatedBlog.save();
    res.status(200).json({
        status: "sucess",
        data: {
            data: updatedBlog,
        },
    });
});

exports.getOneBlog = CatchAsync(async (req, res, next) => {
    const data = await Blog.find(req.params.id);
    if (!data) {
        return next(new Error("the blog with this id isn't found "));
    }
    res.status(200).json({
        status: "sucess",
        data: {
            data: data,
        },
    });
});

exports.GetAllBlog = CatchAsync(async (req, res, next) => {
    const data = await Blog.find();
    res.status(200).json({
        status: "sucess",
        data: {
            data: data,
        },
    });
});
