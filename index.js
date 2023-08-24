const express = require('express')

const app = express()

const server = require('http').createServer().listen(8080);
const gun = GUN({web: server});

app.all('/', (req, res) => {
    
    console.log("Just got a request!")
    res.send('Yo!')
})

app.listen(server);