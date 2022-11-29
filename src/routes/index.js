const express = require("express");
const HomeRouter = require("./Home.router.js");
const adminRouter = require("./admin.router.js");
const tieusuRouter = require("./tieusu.router.js");

function route(app) {
    app.use("/tieusu", tieusuRouter);
    app.use("/admin", adminRouter);
    app.use("/", HomeRouter);
}

module.exports = route;
