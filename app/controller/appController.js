'use strict';

const user_model = require("../model/appModel.js");

exports.list_all_users = function(req, res){      // called from appRoutes.js file
    console.log(res);                             // node server response
    user_model.getAlldata(function(err, data){    // call function in appmodel.js file and send function as argument 
        console.log("controller");
        if(err){
            res.send(err);
        } else {
            console.log('res', data);
            res.send(data);
        1}
    });
};

exports.create_user = function(req, res){
    const new_data = new Data(req.body);

    if( !new_data.data || !new_data.status){
        res.status(400).send({error: true, message: 'please provide data'});
    } else {
        user_model.create_user(new_data, function(err, data){
            if(err){
                res.send(err);
            } else {
                res.json(data);
            }
        });
    }
};

exports.read_user_data = function(req, res) {
    user_model.getUserbyID(req.params.id, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };
  
  
  exports.update_user_data = function(req, res) {
    user_model.updateByID(req.params.id, new Task(req.body), function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };
  
  
  exports.delete_user_data = function(req, res) {
  
  
    user_model.remove( req.params.id, function(err, data) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };