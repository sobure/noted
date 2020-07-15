var fs = require("fs")
var app = require('express')

fs.readFile('db.json', (err, db ) => {
module.exports = function(app,db) {

    
    app.get("/api/db", function(req, res) {
        console.log("hello");
        res.json(db)
    })
    
    app.post("/notes",function(req, res) {
        var newNote = req.body 

        title.push(req.body);
        res.json(true)
        console.log(title)
    });
}
} )
