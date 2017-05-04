var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var randomID = require("random-id");
var methodOverride = require('method-override');

// ADD MONGODB PACKAGES CODE BELOW -- START
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost/wedding_events';
// ADD MONGODB PACKAGES CODE ABOVE -- END

app.use(methodOverride('_method'));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(upload.array()); // for parsing multipart/form-data

// ADD THE MONGODB CONNECTION CODE BELOW -- START
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else {
        console.log('Connection established to', url);
        app.locals.db = db;
    }
});
// ADD THE MONGODB CONNECTION CODE ABOVE -- END


//fot the favicon error to go away below
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

// ADD OUR GET.("/") - HOMEPAGE CODE BELOW -- START
app.get('/', function (req, res) {
    const db = req.app.locals.db;
    db.collection('events', function (err, collection) {
        collection.find().sort({days: 1}).toArray(function (err, items) {
            res.render('index', {
                events: items
            });
        });
    });
});
// ADD OUR GET.("/") - HOMEPAGE CODE ABOVE -- END


// ADD GET.("/addDog") - VIEW CODE BELOW -- START
app.get('/addEvent', function (req, res) {
    res.render('add', {
        title: "Add An Event"
    });
});
// ADD GET.("/addDog") - VIEW CODE ABOVE -- START


// ADD POST.("/") - CODE BELOW -- START
app.post('/', function (req, res) {
    console.log(req.body);
    req.body.id = randomID(10);
    const db = req.app.locals.db;
    db.collection('events', function (err, collection) {
        req.body.days = (req.body.days || 0)*1; /* changes the string to a number */
        collection.insert(req.body, function (err, result) {
            console.log('Inserted %d documents into the "events" collection:', result.length, result);
        });
        // db.collection('events', function (err, collection) {
        collection.find().toArray(function (err, items) {
            res.redirect('/'); /* redirect to get request */
        });
    // });
    });
});
// ADD POST.("/") - CODE ABOVE -- START




// ADD OUR DELETE("/:id") - CODE BELOW -- START
app.delete('/:id', function (req, res) {
    const db = req.app.locals.db;
    db.collection('events', function (err, collection) {
        collection.deleteOne({
            id: req.params.id
        }, function (err, result) {
            console.log('Deleted the record.');
            res.send("hi");
        });
        // * dont need the rest of this because deleting via ajax in myscript.js *
        // collection.find().toArray(function (err, items) {
        //     res.render(('index', {
        //         events: items
        //     }));
        // });
    });
});
// ADD OUR DELETE("/:id") - CODE ABOVE -- START



//Start our server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
