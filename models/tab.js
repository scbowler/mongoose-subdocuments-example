const { Schema } = require('mongoose');
const pageSchema = require('./page');

const tabSchema = new Schema({
    tab_name: String,
    pages: [ pageSchema ]
});

module.exports = tabSchema;
