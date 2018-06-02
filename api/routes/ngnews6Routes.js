'use strict';
module.exports = function(app) {
  var ngNews = require('../controllers/ngnews6Controlleur');

  // ngNews Routes
  app.route('/news')
    .get(ngNews.list_all_news)
    .post(ngNews.create_a_news);


  app.route('/news/:id')
    .get(ngNews.read_a_news)
    .put(ngNews.update_a_news)
    .delete(ngNews.delete_a_news);
};
