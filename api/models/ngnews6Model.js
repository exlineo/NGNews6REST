'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NewsSchema = new Schema({
  titre: {
    type: String,
    required: 'Merci de saisir le titre de la news'
  },
  description: {
    type: String,
    default: 'Description'
  },
  image: {
    type: String,
    default: ''
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('news', NewsSchema);