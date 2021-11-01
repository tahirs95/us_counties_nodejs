const Joi = require('joi')
const mongoose = require('mongoose');

const County = mongoose.model('County', new mongoose.Schema({
  fips: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  }
}));

function validateCounty(county) {
  const schema = {
    fips: Joi.string().min(5).max(50).required(),
    state: Joi.string().min(2).max(50).required(),
    name: Joi.string().min(3).max(100).required()
  };

  return Joi.validate(county, schema);
}

exports.County = County; 
exports.validate = validateCounty;