'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
app.use(cors());

// app.use(express.static('.front-end'));

app.get('/location', (request,response)=>{

  try {
    let city = require('./data/geo.json');
    request = "Lynnwood";
    let test = new City(request, city);
    console.log(test);
    response.send(test);
   

  }catch(error){
    console.log('Error');
    response.status(500).send('the server broke');
  }
});

function City (request, data){
//   this.search_query = data.results[0].address_components[0].long_name;
  this.search_query=request;
  this.formatted_query= data.results[0].formatted_address;
  this.latitude = data.results[0].geometry.location.lat;
  this.longitude = data.results[0].geometry.location.lng;
}
app.listen(PORT, () => console.log(`listening on port ${PORT}`));



