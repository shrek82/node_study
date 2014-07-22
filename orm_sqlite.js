var path = require('path');
var orm = require("orm");

orm.connect("sqlite://db/development.sqlite3", function(err, db) {
  if (err) throw err;

  var User = db.define("users", {
    id: {
      type: "serial",
      key: true
    }, // autoincrementing primary key
    username: {
      type: "text"
    }
  }, {
    methods: {
      fullName: function() {
        return this.username
      }
    },
    validations: {
      ///age: orm.enforce.ranges.number(18, undefined, "under-age")
    }
  });


  User.find({}, 20, function(err, user) {
    for (var i in user) {
      console.log(user[i].username);
      //$record = $('#record');
      //$record.append("<p>" + user[i].username + "<p>");
    };
  });
});
