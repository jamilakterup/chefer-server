const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const chefData = require('./chefer.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello chefer')
});

app.get('/chef', (req, res) => {
    res.send(chefData)
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const singleData = chefData.find(data => data.id === id);
    res.send(singleData);
});

app.listen(port, () => {
    console.log('listening on port', port);
});