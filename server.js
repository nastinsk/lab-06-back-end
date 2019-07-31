'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// app.use(express.static('.front-end'));

app.get('/location', (request,response)=>{
    try {
        let locationData = require('./data/geo.json');
        response.send(locationData);
    }catch(error){
        console.log('Error');
        response.status(500).send('the server broke');
    }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));



