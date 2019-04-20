'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host    :  'ec2-54-247-70-127.eu-west-1.compute.amazonaws.com',
    user    :  'axthzsbxorpjoq',
    password:  'bbe0417783325ee27cc17c788166a0fa5edd128c7f792b21c7a90f1d088c61e8',
    database:   'd2f237trkrilnt'
});

connection.connect(function(err){
    if(err) throw err; else console.log("db connected successfully");
});

module.exports = connection;