module.exports.requireAuth = function (req, res, next) {
    /* kiem tra middleware de xac dinh la da dang nhap */
    app.use((req, res, next) => {
        if (req.session.email) {
            res.locals.email = req.session.email;
            next();
        } else {
            res.redirect("/users/login");
        }
    }
}