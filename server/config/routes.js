var notes = require('../controllers/notes.js');

module.exports = function(app){
    
     app.get('/notes', notes.show);
       /* retrieve the notes from the database */ 
       /* and respond with the notes using 'res.json(notes)' */
    
     app.post('/notes', notes.create);
       /* create a product, and respond with a success of failed message */

     app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular/dist/index.html"))
    });
     
}