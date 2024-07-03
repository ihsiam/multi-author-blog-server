// dependencies
const express = require('express');
const cors = require('cors');
const ConnectDb = require('./config/db');
require('dotenv').config();

// app define
const app = express();
app.use(express.json());
app.use(cors());

// port define
const PORT = process.env.PORT || 3000;

// db connection
ConnectDb();

app.get('/', (req, res) => {
    res.send('Server is running');
});

// 404 error handle
app.use((req, res, next) => {
    res.send('Page not found');
    next();
});

// server error handle
app.use((req, res, err, next) => {
    res.send(`Err: ${err}`);
    next();
});

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
