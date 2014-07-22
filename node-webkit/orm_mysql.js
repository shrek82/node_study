var orm = require("orm");

//orm.connect("mysql://root:password@localhost/test",function(err,db){
var db = orm.connect({
  database: "usho",
  protocol: "mysql",
  host: "localhost",
  username: "root",
  password: "123456",
  port: "3306",
  query: {
    pool: true,
  },
});

//当连接成功或失败时进回调
db.on("connect", function (err) {
  if (err) {
    console.log("Something is wrong with the connection", err);
    return;
  }

  var User = db.define("user", {
    id: {
      type: "serial",
      key: true
    }, // autoincrementing primary key
    name: {
      type: "text"
    },
    account: {
      type: "text"
    },
    alumni_id: {
      type: "number"
    }
  }, {
    methods: {
      fullName: function () {
        return this.name + this.account
      }
    },
    validations: {
      ///age: orm.enforce.ranges.number(18, undefined, "under-age")
    }
  });

  User.find({}, 20, function (err, user) {
    console.log(user.length);
  });

  // connected!
});
