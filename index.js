const express = require('express')
const app = express()
const port = process.env.port || 5000
const mongoDB = require("./db")
const path = require('path')



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.get('/', (req, res) => {
  res.send('Hellooooooo World!')
})
app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',function (_, res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err) {
    res.status(500).send(err);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})