const Email = require('../model/user.model')
module.exports.requireAuth = function(req, res, next){
    if(!req.cookies.userId){
        res.redirect('/show/login');
        return;
    }

    const email = Email.get('email').find({id: req.cookies.userId}).value();

    if(!email){
        res.redirect('/show/login');
        return;
    }
    next();
}