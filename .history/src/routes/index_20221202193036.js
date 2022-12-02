const express = require("express");
const HomeRouter = require("./Home.router.js");
const adminRouter = require("./admin.router.js");
const tieusuRouter = require("./tieusu.router.js");
const { requireAuth } = require("../app/middlewares/auth.middleware.js");

function route(app) {
    app.use("/tieusu", tieusuRouter);
    app.use("/admin", adminRouter,requireAuth);
    app.use("/", HomeRouter);
}

module.exports = route;
