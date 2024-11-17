const {model} = require("mongoose");

const {OrdersSchema} = require("../Schemas/OrdersSchema") ;

const OrderModel = new model("order" , OrdersSchema);

module.exports = { OrderModel } ;