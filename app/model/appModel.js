'use strict';

const sql = require("../model/db.js");

const user_constructor = function(user){

    this.user = user.data;
    this.status = user.status;
    this.created_at = new Date();

}


user_constructor.createData = function createUser(newData, result){

    sql.query("insert into users set ?", newData,function(err, res){
            if(err){
                console.log("error:", err);
                result(err, null);
            } else {
                console.log(res.id);
                result(null, res.id);
            }
    });
};

user_constructor.getUserbyID = function createUser(userID, result){

    sql.query("select * from users where id = ?", userID, function(err, res){
        if(err){
            console.log("error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}

user_constructor.getAlldata = function getAlldata(result){
    console.log("result"+result);  //result parameter is controller function
    sql.query("select * from users", function(err, res){
        console.log(res); //output of query
        if(err){
            console.log("error:", err);
            result(err, null);
        } else {
            console.log("from model"+res);
            result(null, res);   // call controller function
        }
    });
};

user_constructor.updateByID = function(id, data, result){
    sql.query("update users SET data = ? where id = ?", [data.data, id], function(err, res){
        if(err){
            console.log("error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

user_constructor.remove = function(id, result){
    sql.query("DELETE FROM users where id = ?", [id], function(err, res){
        if(err){
            console.log("error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = user_constructor;
