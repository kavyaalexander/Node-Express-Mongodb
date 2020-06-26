const express = require(`express`);
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav) {
    // var authors = [{
    //     title: 'Rabindranath Tagore',
    //     text: 'Even though Tagore received his education in law he took great interest in Shakespeare and his literature. Therefore following his works he became a poet and author. His first poem ‘Mansai’ was published in 1890 after which he gained immense popularity amongst Bengali readers. His most significant works include ‘Gitanjali’ which was a collection of poems and ‘Galpaguchchha’ which are eighty short stories.',
    //     img: 'rabindranath-tagore.jpg'
    // }, {
    //     title: 'Ruskin Bond',
    //     text: 'Bond was born in Punjab, British Indian and attained his education in Shimla and after completion of high school he moved to the U.K to enhance his writing career. He started his career as a freelance writer and eventually got jobs as editor in various magazines. It wasn’t until 1980 his novel was published which became widely admired amongst readers. His best known work is ‘The blue umbrella’, a heartwarming story read worldwide.',
    //     img: 'ruskin-bond.jpg'
    // }, {
    //     title: 'Arundhati Roy',
    //     text: 'Writer, essayist and political activist, Arundhati Roy, is best known for her novel The God of Small Things which won her the Man Booker Prize for Fiction in 1997. Some of her other works include, The Algebra of Infinite Justice, Kashmir: The Case for Freedom and Capitalism: A Ghost Story.',
    //     img: 'arundhati-roy.jpg'
    // }, {
    //     title: 'Khushwant Singh',
    //     text: 'He was a journalist, editor and novelist born in Hadli during the time of British India. He received his degree at St. Stephen’s College in New Delhi and King’s College in London. He initially started his career as a lawyer after which he got the opportunity to become the editor of important journals and magazines. As an author he wrote some outstanding novels like Train to Pakistan (1956), Delhi: A Novel (1990), The Company of Women (1999), Truth, Love and a Little Malice (2002), The Good, the Bad and the Ridiculous (2013).',
    //     img: 'khushwant-singh.jpg'
    // }, {
    //     title: 'Chetan Bhagat',
    //     text: 'Cited by The New York Times in 2008 as the biggest selling English language novelist in India’s history, Chetan Bhagat is author, screenwriter, columnist and TV personality. He is known for Comedy-drama novels about young urban middle-class Indians. Some of his famous work includes Five Point Someone, 2 States, Half Girlfriend and One Indian Girl.',
    //     img: 'chetan-bhagat.jpg'
    // }, {
    //     title: 'Jhumpa Lahiri',
    //     text: 'Laihiri is well known for her novels, essays and short stories. She was born in London but relocated to the United States to get her education from the Barnard College. She went ahead for her masters and attained her degree from the Boston University. She was a struggling writer and her work was initially rejected by the publishers until her biggest success, ‘The interpreter of Maladies’. This was a compilation of all her short stories about the life of immigrants in post-partition India. After the runaway success she wrote many other novels which are famous throughout the Indian continent and the world. Some of the most famous ones being; The namesake, Unaccustomed Earth and The lowland.',
    //     img: 'jhumpa-lahiri.jpg'
    // }]
    authorRouter.get('/', function(req, res) {
        Authordata.find()
            .then(function(authors) {
                res.render("authors", {
                    nav,
                    title: 'Authors',
                    authors
                });
            });
    });

    authorRouter.get('/:id', function(req, res) {
        const id = req.params.id
        Authordata.findOne({ _id: id })
            .then(function(author) {
                res.render('author', {
                    nav,
                    title: 'Author',
                    author
                });
            });
    });

    authorRouter.get('/delete/:id', function(req, res) {
        Authordata.remove({ _id: req.params.id }, function(err, deleData) {
            res.redirect("/Authors");
        });
    });
    return authorRouter;
}


module.exports = router;