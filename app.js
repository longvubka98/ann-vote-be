const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

//cors
const cors = require('cors')
app.use(cors())

// Setup server port
const port = process.env.PORT || 8001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
require("./src/db/index")

// define a root/default route
app.get('/', (req, res) => {
    res.json({ "message": "Test" });
});

// Require Users routes
const routes = require("./src/Routes");
app.use("/v1/api", routes);
app.use((err, req, res, next) => {
    errorHandler(err, res);
});

app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});