const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

//homepage
router.route('/')
.get(controller.get)
  .post(controller.post);

module.exports = router;
