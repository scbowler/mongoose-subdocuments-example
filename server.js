const app = require('express')();
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 9000;

mongoose.connect('mongodb://localhost/study', {
    useMongoClient: true
});

mongoose.Promise = Promise;

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'Connection Error:'));
db.once('open', function(){
    console.log('Connected to DB');
});

routes(app);

app.listen(PORT, () => {
    console.log('Server running on PORT: ' + PORT);
});
