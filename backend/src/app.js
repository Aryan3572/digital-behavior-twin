const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.send('Digital behavior twin backend is running');
});

module.exports = app;