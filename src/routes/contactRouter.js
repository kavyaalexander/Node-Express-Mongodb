const express = require(`express`);
const contactRouter = express.Router();

function router(nav) {

    contactRouter.get('/', function(req, res) {
        res.render("contact", {
            nav,
            title: 'Contact Us'


        });
    });

    return contactRouter;
}


module.exports = router;