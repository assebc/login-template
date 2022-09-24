var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "local",
    password: "host"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE usersdb", function(err,result){
        if (err) throw err;
        console.log("Database created");
    });
});