const express = require(`express`);
const authoreditRouter = express.Router();
const Authordata = require('../model/Authordata');
const authoredit = [{
    link: '/authoredits',
    name: 'authoredit'
}]

function router(nav) {

    authoreditRouter.get('/', function(req, res) {
        res.render("authoredit", {
            nav,
            title: 'Edit Author'

        });
    });

    authoreditRouter.get('/:id', function(req, res) {

        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then((author) => {
                res.render('authoredit', {
                    nav,
                    title: "Edit Author",
                    author
                });
            })
    });

    authoreditRouter.post("/update/:id", function(req, res) {
        var id = req.params.id;

        var author = req.body.author;
        var notes = req.body.notes;
        var image = req.body.image;


        Authordata.updateOne({ _id: id }, { $set: { author: author, notes: notes, image: image } })

        .then((books) => { res.redirect("/authors"); })

    })
    return authoreditRouter;
}

module.exports = router;