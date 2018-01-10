const mongoose = require('mongoose');
const binderSchema = require('./binder');

const userSchema = new mongoose.Schema({
    binders: [ binderSchema ],
    googleId: String,
    username: String,
});

module.exports = mongoose.model('User', userSchema);
