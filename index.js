const express = require('express')
const app = express()
var path = require('path');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000


app.use(bodyParser.json())

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/index.html'));
})
app.post("/store", (req, res)=> {
    console.log(req.body); 
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})