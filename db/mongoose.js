const mongoose = require("mongoose");
const { database } = require("../config");

//data base connect
mongoose.connect(database, {});
