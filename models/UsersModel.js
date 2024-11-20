const { model } = require("mongoose") ;

const {UsersSchema} = require('../schemas/UsersSchema');

const UsersModel = new model("users", UsersSchema);

module.exports = {UsersModel} ;