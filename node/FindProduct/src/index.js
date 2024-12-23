const express = require("express");
const cors = require("cors");
const app = express();
const port = 2000;
require("dotenv").config();

const mongoose = require("mongoose");
const Connect = require("./config/connection");
const router = require("./routes/register.route");
const prodrouter = require("./routes/product.route");
const filerouter = require("./routes/file.route");
app.use(express.json());
app.use(cors("*"));
Connect();
router.use("/static",express.static("public/profile/"))

app.use(router);
app.use("/v1", filerouter);

app.use(prodrouter);
app.listen(port, () => {
  console.log("server Coonected");
});
