const express = require('express')
const app = express()
const port = 8020

app.use('/',express.static(__dirname))
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})