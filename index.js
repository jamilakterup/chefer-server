const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const chefData = require('./chefer.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello chefer')
});



app.listen(port, () => {
    console.log('listening on port', port);
});