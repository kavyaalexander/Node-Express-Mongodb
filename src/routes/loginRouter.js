const express = require(`express`);
const loginRouter = express.Router();
const Signupdata = require('../model/Signupdata');
var statusmsg;

function router(nav) {
    var login = [{
        img: 'login 1.jpg'
    }, {
        img: 'login2.jpg'
    }, {
        img: 'login3.jpg'
    }];
    loginRouter.get('/', function(req, res) {
        if (statusmsg == "Invalid") {
            res.render("login", {
                nav,
                title: 'Login',
                login,
                status: statusMsg


            });
        } else {
            res.render('login', {
                nav,
                login,
                status: "Enter Username & Password"
            });
        }
    });

    loginRouter.post("/login", function(req, res) {

        var uname = req.body.uname;
        var password = req.body.password;

        Signupdata.findOne({ uname: uname, password: password })

        .then((user) => {
            if (user == null) {
                statusMsg = "Invalid";
                res.redirect('/login');

            } else {
                statusMsg = "Successfully Login";
                res.redirect('/home');
            }
        })

    });

    return loginRouter;
}
module.exports = router;