const express = require("express");
const app = express();
const { port } = require("./config.js");
const apiRouters = require("./routes/api.js");

//routes
app.use("/", apiRouters);
//data base initialization
require("./db/mongoose.js");

//serwer
app.listen(port, () => {
  console.log("serwer listening... http://localhost:" + port);
});
