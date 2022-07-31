const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
const route = require("./routes/Router");
const app = express();
const knexConfig = require('./db/knexConfig');
const apiErrorMiddleware = require('./middlewares/ApiErrorMiddleware');

app.use(express.json());
app.use("/api", route);
app.use(cors());
app.use(apiErrorMiddleware);
app.listen(process.env.PORT);
