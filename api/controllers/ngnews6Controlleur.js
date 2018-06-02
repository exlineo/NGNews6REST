'use strict';


var mongoose = require('mongoose'),
  News = mongoose.model('news');

exports.list_all_news = function(req, res) {
  News.find({}, function(err, News) {
    if (err)
      res.send(err);
    res.json(News);
  });
};




exports.create_a_news = function(req, res) {
  var nouvelle = new News(req.body);
  nouvelle.save(function(err, News) {
    if (err)
      res.send(err);
    res.json(News);
  });
};


exports.read_a_news = function(req, res) {
  News.findById(req.params.newsId, function(err, News) {
    if (err)
      res.send(err);
    res.json(News);
  });
};


exports.update_a_news = function(req, res) {
  News.findOneAndUpdate({_id: req.params.newsId}, req.body, {new: true}, function(err, News) {
    if (err)
      res.send(err);
    res.json(News);
  });
};


exports.delete_a_news = function(req, res) {


  News.remove({
    _id: req.params.newsId
  }, function(err, News) {
    if (err)
      res.send(err);
    res.json({ message: 'News détruite' });
  });
};