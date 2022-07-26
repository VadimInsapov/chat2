const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
const route = require("./routes/Router");
const app = express();
const knexConfig = require('./db/knexConfig');
const apiErrorMiddleware = require('./middlewares/http/ApiErrorMiddleware');
const webSocketAuthMiddleware = require('./middlewares/webSocket/AuthMiddleware');
const socketio = require("socket.io");

app.use(express.json());
app.use("/api", route);
app.use(cors());
app.use(apiErrorMiddleware);
const server = app.listen(process.env.PORT);

const io = socketio(server);
require("./io/index")(io);