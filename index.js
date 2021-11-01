const winston = require('winston');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

require('./startup/routes')(app);
require('./startup/db')();
require('./load_db')();

const port = process.env.PORT || 8080;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;