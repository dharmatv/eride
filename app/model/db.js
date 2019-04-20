'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host    :  'localhost',
    user    :  'admin',
    password:  'Djana@2349',
    database:   'onmiway'
});

connection.connect(function(err){
    if(err) throw err; else console.log("db connected successfully");
});

module.exports = connection;