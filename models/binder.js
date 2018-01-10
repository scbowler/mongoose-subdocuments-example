const { Schema } = require('mongoose');
const tabSchema = require('./tab');

const binderSchema = new Schema({
    binder_name: String,
    tabs: [ tabSchema ]
});

module.exports = binderSchema;
