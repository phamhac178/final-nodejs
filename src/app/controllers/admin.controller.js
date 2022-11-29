const Biography = require('../model/biography.model');

class adminController  {

    index(req, res) { 
        Biography.find({}, function(err ,biography) {
            res.render('admin', {biography});
        })
    }

    create(req, res) { 
        Biography.create(req.body);
        res.redirect('/admin');
    }

    update(req, res) { 
        Biography.update({ _id:req.body.id }, { $set:req.body })
        .exec()
        .then(() => {
          res.redirect('/admin')
        })
    }

    delete(req, res) { 
        const id = req.body.id;
        Biography.findByIdAndRemove(id)
        .exec()
        .then(()=> res.redirect('/admin'))
    }
}

module.exports = new adminController;




                
             