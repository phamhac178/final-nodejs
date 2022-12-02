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
    async onLogin(req, res) {
        var query = { email: req.body.email };
        var result = await Users.find(query);
        console.log(result)
        if (result.length == 0) {
            var errorMsg = 'Tài khoản ' + req.body.email + ' không tồn tại';
            res.render('index', { errorMsg });
        } else {

            if (result[0].password == req.body.password) {
                req.session.emailId = result[0].emailId.toString();
                req.session.email = result[0].email;
                res.render('/show/login');
            } else {
                var errorMsg = 'Sai mật khẩu';
                res.render('login', { errorMsg });
            }
        }
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
    logout(req, res) {
        req.session.destroy();
        res.redirect("/show/login");
    }
}

module.exports = new HomeController();
