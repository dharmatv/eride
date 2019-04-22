var express = require('express');
app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

// const mysql = require('mysql');
//const mc = mysql.createConnection({
   // host    :  'localhost',
   // user    :  'admin',
    //password:  'Djana@2349',
  //  database:   'onmiway'
//});
 
// connect to database
//mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); 

console.log("restful API service is"+ port);
