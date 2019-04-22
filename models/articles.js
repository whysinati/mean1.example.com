var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Articles = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title']
  },
  body: {
    type: String,
    required: [true, 'Please enter your content']
  },
  slug: {
    type: String
  },
  description: {
    type: String
  },
  keywords: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  }
});

//Add unique validation properties to the model
Users.plugin(uniqueValidator);

Users.pre('save', function(next){
  this.modified = new Date().toISOString();
  next();
});

module.exports  = mongoose.model('Users', Users);