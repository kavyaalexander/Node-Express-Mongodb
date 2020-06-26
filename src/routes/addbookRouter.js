const express = require(`express`);
const addbookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav) {

    addbookRouter.get('/', function(req, res) {
        res.render("addbook", {
            nav,
            title: 'Add Book',


        });
    });

    addbookRouter.get('/add', function(req, res) {

        var item = {
            title: req.query.title,
            author: req.query.author,
            genre: req.query.genre,
            image: req.query.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });




    return addbookRouter;
}

module.exports = router;