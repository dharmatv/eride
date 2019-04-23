var express = require('express');
app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

 const mysql = require('mysql');
const mc = mysql.createConnection({
     host    :  'ec2-54-247-70-127.eu-west-1.compute.amazonaws.com',
    user    :  'axthzsbxorpjoq',
    password:  'bbe0417783325ee27cc17c788166a0fa5edd128c7f792b21c7a90f1d088c61e8',
    database:   'd2f237trkrilnt'
});
 
//connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); 

console.log("restful API service is"+ port);
