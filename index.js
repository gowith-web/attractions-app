var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/helloworld', function(req, res, next) {
    res.json({msg: 'helloworld'})
})

app.listen(5000, function () {
    console.log('web server listening on port 5000')
})