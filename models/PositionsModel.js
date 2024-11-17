const { model }  = require("mongoose");

const{ PositionsSchema } = require("../Schemas/PositionSchema");

const PositionsModel = new model("positions",PositionsSchema);

module.exports = { PositionsModel} ;