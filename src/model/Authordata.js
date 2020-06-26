  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/libray');
  const Schema = mongoose.Schema;

  const AuthorSchema = new Schema({

      author: String,
      notes: String,
      image: String
  });


  var Authordata = mongoose.model('authordata', AuthorSchema);
  module.exports = Authordata;