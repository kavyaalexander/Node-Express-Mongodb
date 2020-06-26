const express = require(`express`);
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');


function router(nav) {

    booksRouter.get('/', function(req, res) {
        Bookdata.find()
            .then(function(books) {
                res.render("books", {
                    nav,
                    title: 'Books',
                    books
                });
            });
    });

    booksRouter.get('/:id', function(req, res) {
        const id = req.params.id
        Bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render('book', {
                    nav,
                    title: 'Book',
                    book
                });
            });
    });

    booksRouter.get('/delete/:id', function(req, res) {
        Bookdata.remove({ _id: req.params.id }, function(err, deleData) {
            res.redirect("/books");
        });
    });




    return booksRouter;
}

module.exports = router;