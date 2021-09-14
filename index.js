const express = require('express');
const env = require('dotenv');
const app = express();
const data = require('./data/example.json');

env.config();
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/users');
});

app.get('/users', (req, res) => {
    return res.status(400).json(data);
});

app.get('/users/:id', (req, res) => {
    const user = data.filter((d) => d.id == req.params.id );
    res.status(400).json(user);
});

app.listen(process.env.PORT, '::', () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});