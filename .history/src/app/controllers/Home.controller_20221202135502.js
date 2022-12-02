const { find } = require("../model/biography.model");
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
     login = async (req, res) =>{
        const user = await Users.findOne({email: req.body.email})
        if(user){
            const checkPassword = await bcrypt.compare(req.body.password, user.password)
            if(checkPassword){
                const token =  jwt.sign({
                    id: user._id,
                    email: user.email,
                    role: user.role
                }, process.env.ACCESS_TOKEN_KEY, {expiresIn: "3h"})
                const {password, ...other} = user._doc

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
