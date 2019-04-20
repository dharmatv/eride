'use strict';

module.exports = function(app){
    const controllerList = require("../controller/appController.js");

    app.route('/users')
    .get(controllerList.list_all_users)   // call list_all_users function in appcontroller.js file
    .post(controllerList.create_user);

    app.route('user/:userID')
    .get(controllerList.read_user_data)
    .put(controllerList.update_user_data)
    .delete(controllerList.delete_user_data);
}