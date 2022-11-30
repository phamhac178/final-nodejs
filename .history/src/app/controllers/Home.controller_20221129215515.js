const Biography = require("../model/biography.model");
const Users = require("../model/user.model");
class HomeController {
    home(req, res, next) {
        Biography.find({})
            .then((biographys) => res.render("home", { biographys }))
            .catch(next);
    }

    // [GET] /show/login
    showlogin(req, res) {
        res.render("login");
    }

    //[POST] /login
    async login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const biographys = await Biography.find({});
        Users.findOne(
            { $and: [{ email: email }, { password: password }] },
            (err, user) => {
                if (user) {
                    var msg = "login successfull";
                    req.session.user = email;
                    res.render("home", {
                        user: req.session.user,
                        biographys: biographys,
                    });
                } else {
                    var msg = "login faild";
                    res.render("login", { msg });
                }
                // res.json(user)
            }
        );
        // res.render('login')
    }

    //[GET] /show/register
    showregister(req, res) {
        res.render("register");
    }

    //[POST] /register
    register(req, res, next) {
        const email = req.body.email;
        Users.findOne({ email: email }, (err, user) => {
            if (user) {
                var msg = "email da su dung";
            } else if (req.body.password != req.body.repassword) {
                var msg = "password va rpassword ko giong";
            } else {
                Users.create({
                    email: req.body.email,
                    password: req.body.password,
                });
                var msg = "register thanh cong";
            }
            res.render("login", { msg });
        });
    }
}

module.exports = new HomeController();
