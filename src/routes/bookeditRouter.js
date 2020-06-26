const express = require(`express`);
const bookeditRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const bookedit = [{
    link: '/bookedits',
    name: 'bookedit'
}]

function router(nav) {

    bookeditRouter.get('/', function(req, res) {
        res.render("bookedit", {
            nav,
            title: 'Edit Book'


        });
    });




    bookeditRouter.get('/:id', function(req, res) {

        const id = req.params.id;
        Bookdata.findOne({ _id: id })
            .then((book) => {
                res.render('bookedit', {
                    nav,
                    title: "Edit Book",
                    book
                });
            })
    });

    bookeditRouter.post("/update/:id", function(req, res) {
        var id = req.params.id;
        var title = req.body.title;
        var author = req.body.author;
        var genre = req.body.genre;
        var image = req.body.image;


        Bookdata.updateOne({ _id: id }, { $set: { title: title, author: author, genre: genre, image: image } })

        .then((books) => { res.redirect("/books"); })

    })
    return bookeditRouter;
}

module.exports = router;