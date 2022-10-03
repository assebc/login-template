var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "regist_users"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var create_table = "CREATE TABLE IF NOT EXISTS users ('email', 'username', 'password')"
  //var sql = "INSERT INTO users (email, username, password) VALUES ()";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

function insertSQL(sql){
    var sql = sql;
    con.query(sql);
}