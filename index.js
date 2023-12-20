const express = require("express");
const app = express();
const { port } = require("./config.js");
const apiRouters = require("./routes/api.js");
const bodyParser = require("body-parser");

//parsers Content-Type: application/json
app.use(bodyParser.json());

//routes
app.use("/api", apiRouters);
//data base initialization
require("./db/mongoose.js");

//serwer
app.listen(port, () => {
  console.log(
    "( ͡° ͜ʖ ͡°) ¯_( ͡° ͜ʖ ͡°)_/¯ serwer listening... http://localhost:" + port
  );
});
