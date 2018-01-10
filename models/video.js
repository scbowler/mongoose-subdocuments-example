const { Schema } = require('mongoose');

const videoSchema = new Schema({
    video_info: String
});

module.exports = videoSchema;
