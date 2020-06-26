const express = require(`express`);
const app = express();
const nav = [{
        link: '/books',
        name: 'Books'
    },
    { link: '/authors', name: 'Authors' },
    { hreff: '/addbook', heading1: 'ADD BOOK' },
    { hreff: '/addauthor', heading1: 'ADD AUTHOR' },
    { href: '/signup', heading: 'Sign Up' },
    { href: '/login', heading: 'Login' },
    { href: '/', heading: 'Logout' }, { link1: '/home', name1: 'Home' }
]


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const contactRouter = require('./src/routes/contactRouter')(nav)
const signupRouter = require('./src/routes/signupRouter')(nav)
const loginRouter = require('./src/routes/loginRouter')(nav)
const addbookRouter = require('./src/routes/addbookRouter')(nav)
const addauthorRouter = require('./src/routes/addauthorRouter')(nav)
const bookeditRouter = require('./src/routes/bookeditRouter')(nav)
const authoreditRouter = require('./src/routes/authoreditRouter')(nav)


app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/books', booksRouter);
app.use('/Authors', authorRouter);
app.use('/Contact', contactRouter);
app.use('/Signup', signupRouter);
app.use('/Login', loginRouter);
app.use('/addbook', addbookRouter);
app.use('/addauthor', addauthorRouter);
app.use('/bookedit', bookeditRouter);
app.use('/authoredit', authoreditRouter);


app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library Management'

    });

});
app.get('/home', function(req, res) {
    res.render("home", {
        nav,
        title: 'Library Management'

    });

});

app.listen(5006);
console.log("Server ready at port 5006");