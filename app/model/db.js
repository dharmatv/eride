const mysql = require('mysql');

const connection = mysql.createConnection({
  host    :  'eu-cdbr-west-02.cleardb.net',
  user    :  'b475fc9020ed6c',
  password:  '22ba8c8a',
  database:   'heroku_e7641a1eec3f243'
});

connection.connect(function(err){
    if(err) throw err; else console.log("db connected successfully");
});

module.exports = connection;
