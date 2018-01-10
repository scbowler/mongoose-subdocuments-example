const { Schema } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: String
});

module.exports = noteSchema;
