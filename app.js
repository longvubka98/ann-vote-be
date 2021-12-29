const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

// Setup server port
const port = process.env.PORT || 8001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});