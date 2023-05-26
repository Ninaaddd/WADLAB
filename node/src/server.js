const express = require('express')
const app = express()
const path = require('path')

staticpath = path.join(__dirname, '../templates')
app.use(express.static(staticpath));
app.get('/', (res, req) => {
    res.send("Hello World")
})
app.listen(8000, () => {
    console.log("Server is starting at 8000");
})