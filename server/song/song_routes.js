"use strict";

var controller = require('./song_controllers.js');
var multiparty = require('connect-multiparty');
var multipartMiddleware = multiparty();
var bodyParser  = require('body-parser');

// TODO: we don't need this (for test only - to manually fire uploadSongs)
var upload = require('./song_upload.js');

module.exports = exports = function (router) {
  router.route('/')
    .get(controller.get)
    // post handles submits with new user inputs
    .post(controller.postUserData);
  // serving audio file route
  router.route('/get/md5/*')
    .get(controller.getSong);
  // only use multipart on /send route  
  router.post('/send', multipartMiddleware, controller.postSong);
};
