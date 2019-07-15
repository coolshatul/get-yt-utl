const express = require('express')
var youtubedl = require('youtube-dl');
const app = express()

app.get('/', function (req, res) {
   res.send('Hello World')
})

app.get('/you-url', youUrl);

app.listen(3000)

function youUrl(req, res) {
   var url = `http://www.youtube.com/watch?v=${req.query.id}`;

   youtubedl.getInfo(url, function (err, info) {
      console.log('url:', url);
      if (err) { res.send(err); }
      else {
         console.log('title:', info.title);
         res.send(info.url)
      }
   });
}