const { Schema } = require('mongoose');
const videoSchema = require('./video');
const noteSchema = require('./notes');

const pageSchema = new Schema({
    page_date: String,
    page_name: String,
    notes: [noteSchema],
    videos: [videoSchema],
    page_color: String
});

module.exports = pageSchema;
