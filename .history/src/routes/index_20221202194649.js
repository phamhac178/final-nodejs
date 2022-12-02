const express = require("express");
const HomeRouter = require("./Home.router.js");
const adminRouter = require("./admin.router.js");
const tieusuRouter = require("./tieusu.router.js");
const authMiddleware = require('../app/middlewares/auth.middleware')


function route(app) {
    app.use("/tieusu", tieusuRouter);
    app.use("/admin", adminRouter.authMiddleware);
    app.use("/", HomeRouter);
}

module.exports = route;
