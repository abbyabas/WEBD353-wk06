var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost/wedding_events';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else {
        //Insert Code Here
        console.log('Connection established to', url);
        // Data is stored in collections; we need to create one
        var collection = db.collection('events');
        //Create some users
        var event1 = {
            "id": "1"
            , "name": "Bale Boroun"
            , "date": "November 14, 2017"
            , "days": 7
            , "type": "persian"
        };
        var event2 = {
            "id": "2"
            , "name": "Majless e Namzadi (engagement)"
            , "date": "November 21, 2017"
            , "days": 14
            , "type": "persian"
        };
        var event3 = {
            "id": "3"
            , "name": "Shirini Khorone"
            , "date": "November 21, 2017"
            , "days": 14
            , "type": "persian"
        };
        var event4 = {
            "id": "4"
            , "name": "Engagement Party"
            , "date": "November 21, 2017"
            , "days": 14
            , "type": "portugese"
        };
        var event5 = {
            "id": "5"
            , "name": "Engagement Photos"
            , "date": "November 28, 2017"
            , "days": 21
            , "type": "tradition"
        };
        var event6 = {
            "id": "6"
            , "name": "Bachelor Party"
            , "date": "April 13, 2018"
            , "days": 158
            , "type": "tradition"
        };
        var event7 = {
            "id": "7"
            , "name": "Bachelorette Party"
            , "date": "April 13, 2018"
            , "days": 158
            , "type": "tradition"
        };
        var event8 = {
            "id": "8"
            , "name": "Tabag Baran"
            , "date": "April 20, 2018"
            , "days": 165
            , "type": "persian"
        };
        var event9 = {
            "id": "9"
            , "name": "Rehersal Dinner"
            , "date": "April 22, 2018"
            , "days": 167
            , "type": "portugese"
        };
        var event10 = {
            "id": "10"
            , "name": "Sofreye Aghd (Wedding Spread)"
            , "date": "April 23, 2018"
            , "days": 168
            , "type": "persian"
        };
        var event11 = {
            "id": "11"
            , "name": "The Contract Signing"
            , "date": "April 23, 2018"
            , "days": 168
            , "type": "persian"
        };
        var event12 = {
            "id": "12"
            , "name": "The Wedding Ceremony"
            , "date": "April 23, 2018"
            , "days": 168
            , "type": "portugese"
        };
        var event13 = {
            "id": "13"
            , "name": "Patakhti"
            , "date": "April 23, 2018"
            , "days": 168
            , "type": "persian"
        };
        var event14 = {
            "id": "14"
            , "name": "Wedding Reception"
            , "date": "April 23, 2018"
            , "days": 168
            , "type": "portugese"
        };
        // Insert some content
        collection.insert([event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
            }
            //Close connection
            db.close();
        });
    }
});
