const Email = require('../model/user.model')
module.exports.requireAuth = function(req, res, next){
    if(!req.cookies.userId){
        res.redirect('/show/login');
        return;
    }

    const Email = Email.get('user').find({id: req.cookies.userId}).value();

    if(!Email){
        res.redirect('/show/login');
        return;
    }
    next();
}