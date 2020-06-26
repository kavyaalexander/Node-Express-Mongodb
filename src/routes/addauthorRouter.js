const express = require(`express`);
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav) {

    addauthorRouter.get('/', function(req, res) {
        res.render("addauthor", {
            nav,
            title: 'Add Author'


        });
    });

    addauthorRouter.get('/add', function(req, res) {

        var item = {
            author: req.query.author,
            notes: req.query.notes,
            image: req.query.image
        }
        var book = Authordata(item);
        book.save();
        res.redirect('/Authors');
    });



    // addauthorRouter.get('/update/:id', function(req, res) {
    //             res.render('addauthor'), {}
    //             addauthorRouter.get('/update/:id', function(req, res) {
    //                 Authordata.findOneAndUpdate({ _id: req.params.id }, {
    //                         author: req.query.author,
    //                         notes: req.query.notes,
    //                         image: req.query.image

    //                     },

    //                     function(err, updaData) {
    //                         res.redirect("/Authors");
    //                     });
    //             });


    return addauthorRouter;
}

module.exports = router;