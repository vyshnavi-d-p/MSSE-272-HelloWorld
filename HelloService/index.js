const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello');
});

const port = 8000;

