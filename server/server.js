const express = require('express');
const { response } = require('express');
const fetch = require('node-fetch');
// const validateInput = require('./helper');

const app = express();
const port = 8080;
 
const https = require('https');
 


app.get('/api/cities/:city', (req, res) => {
  const city = req.params.city;
  const api = `https://api.teleport.org/api/urban_areas/slug:${city}/scores`;
  console.log(api);
  https.get(api, (response) => {
    const chunks = [];
    response.on('data', (chunk) => {
      chunks.push(chunk);
    })
    response.on('end', () => {
      const data = Buffer.concat(chunks)
      const cityData = JSON.parse(data);
      const qolData = cityData.categories;
      res.json(qolData);
    })
  })
})
 
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
