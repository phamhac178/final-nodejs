const Biography = require('../model/biography.model')
class tieusuController  {

    tieusu(req, res, next){
        //promise
        Biography.find({})
            // .limit(1)
            .then(biographys => res.render('tieusu', { biographys }))
            .catch(next)
    }

    show(req, res, next){
        Biography.findOne({ slug: req.params.slug })
            .then(biography => {
                res.render('chitiet', { biography })
            })
            .catch(next)
    }

    search(req, res, next){
        Biography.find({ 
            name: {$regex: '.*' + req.body.name + '.*', $options: 'i'}
        })
        .then(biographys => {
            res.render('tieusu', { biographys })
        })
        .catch(next)
    }

}

module.exports = new tieusuController;




                
             