const express = require(`express`);
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav) {
    var signup = [{
        img: 'signin3.jpg',

    }, {
        img: 'signup.jpg'
    }, {
        img: 'signup1.jpg'
    }];
    signupRouter.get('/', function(req, res) {
        res.render("sign up", {
            nav,
            title: 'Sign Up',
            signup

        });
    });
    signupRouter.post('/submit', function(req, res) {

        var item = {
            name: req.body.name,
            uname: req.body.uname,
            mobno: req.body.mobno,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        };
        // var uname = req.body.uname;
        // var email = req.body.email;
        // var password = req.password;

        Signupdata.findOne({ uname: item.uname, email: item.email, password: item.password })
            .then((user) => {
                if (user == null) {
                    var signup = Signupdata(item);
                    signup.save();
                    // res.render('login', {
                    //     nav, login
                    // });
                    res.redirect('/login')
                } else {
                    // res.redirect('/signup')
                    res.send("Username/email/password already exist");
                    return res.redirect('/signup');
                }
            });
    });
    return signupRouter;
}
module.exports = router;