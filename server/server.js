const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
const route = require("./routes/router");
const app = express();
const knexConfig = require('./db/knexConfig');
const {USER} = require("./db/tableNames");

app.use(express.json());
app.use("/api", route);
app.use(cors());
app.listen(process.env.PORT);
