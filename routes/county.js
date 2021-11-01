const {County, validate} = require('../models/county'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/suggest', async (req, res) => {
  let counties = undefined;
  let keywords = req.query.q
  if (keywords){
    keywords = keywords.split(',')
    regex = keywords.map(function (e) { return new RegExp(e.trim(), "i"); });
    counties = await County
      .find({$or: [
        {'name': { "$in": regex } },
        {'state': { "$in": regex } }
      ]})
      .sort({ name: 1})
      .select({fips:1, state:1, name:1});
  }
  else {
    counties = await County
    .find({})
    .sort({ name: 1})
    .select({fips:1, state:1, name:1});
  }
  res.send({"total": counties.length, "counties": counties});
});

module.exports = router; 