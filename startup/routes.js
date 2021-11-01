const express = require('express');
const customers = require('../routes/county');

module.exports = function(app) {
  app.use(express.json());
  app.use('/', customers);
}