const express = require("express");
const cookieParser = require("cookie-parser");
const middleware = require("../Middleware/error");
const cors = require('cors');
const app = express();

const users = require("../Routes/user");

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", users);

app.use(middleware);

module.exports = app;
