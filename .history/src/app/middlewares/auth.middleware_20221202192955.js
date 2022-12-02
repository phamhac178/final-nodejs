const User = require('../model/user.model')
module.exports.requireAuth = function(req, res, next){
    if(!req.cookies.userId){
        res.redirect('/show/login');
        return;
    }

    const user = User.get('user').find({id: req.cookies.userId}).value();

    if(!user){
        res.redirect('/show/login');
        return;
    }
    next();
}