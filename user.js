var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


    function UserDAO(database) {
        "use strict";

        this.db = database;
        this.userCollection = this.db.collection('user');

        //get userEmail function
        this.getUserEmail = function(userId, callback) {
            "use strict";
            let queryDoc = { _id: userId };
            this.userCollection.find(queryDoc).limit(1).next(function(err, user) {
                assert.equal(err, null);
                callback(user.email);
            });
        };

        //add user Email function and returns _id

        this.addUser = function(userEmail, callback) {
            "use strict";
            var userDoc = {
                email: userEmail,
                date: Date.now()
            }
            // Will update the first document found matching the query document.
            this.userCollection.insertOne(userDoc,
                function(err, result) {
                    assert.equal(null, err);
                    callback(userDoc);
                });
        };
      }



module.exports.UserDAO = UserDAO;
