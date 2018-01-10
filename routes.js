const Users = require('./controllers/user');

module.exports = function(app){
    app.get('/', (req, res) => {
        res.send('<h1>OK</h1>');
    });
    
    app.get('/new-user', Users.addUser);
    
    app.get('/get-user', Users.getUser);
    
    app.get('/add-binder', Users.addBinder);
    
    app.get('/add-tab', Users.addTab);
    
    app.get('/add-page', Users.addPage);
    
    app.get('/add-note', Users.addNote);
    
    app.get('/edit-note', Users.editNote);

    app.get('/edit-page', Users.editPage);
}
