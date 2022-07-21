const express = require('express');
require('dotenv').config()
const route = require("./routes/router");
const app = express();
const knexConfig = require('./db/knexConfig');
const {USER} = require("./db/tableNames");

app.use(express.json());
app.use("/api", route);
app.listen(process.env.PORT);


console.log(USER.columns.ID);