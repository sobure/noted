var express = require('express');
var path = require("path")
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
var notes = []
app.get('/', function(req,res) {
    res.sendFile(path.join
    (__dirname,'index.html'

    ))
    app.get('/notes',function
        (req, res) {
            res.sendFile(path,join(__dirname, 'notes.html'))
        })})
    app.get('/view', function(req, res) {
        res.json(db)
    })

require('./htmlroutes.js')(app);
//require('./apiRoutes.js')(app);

app.get("/api/notes",function(req, res) {
    res.json(db);
});

app.post("./api/notes", function (req, res )
{   console.log("added new note")
    var newNote = req.body

});
app.listen(PORT, function() {
    console.log("App listening on PORT" + 
    PORT);
});