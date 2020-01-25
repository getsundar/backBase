const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 8000;
const app = express();
const cors = require('cors');
app.use(cors());
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/getData', (req, res) => {

  http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.json({
        'data': JSON.parse(data)
      });
      console.log();
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})
