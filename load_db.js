const {County, validate} = require('./models/county'); 
const mongoose = require('mongoose');
const data = require('./data.json')

module.exports = function() {
    County.count().then((counties_count) => {
        if (counties_count == 0){
            data.forEach(async row => {
                await (new County(row)).save()
            })
        }
    })}