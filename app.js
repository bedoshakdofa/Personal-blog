const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
const BlogRoutes = require("./routes/BlogRouters");

app.use("/api/v1/blog", BlogRoutes);

app.all("*", (req, res, next) => {
    next(new Error(`can\'t find this url ${req.originalUrl}`));
});

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "fail",
        message: err.message,
    });
});
module.exports = app;
