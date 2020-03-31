const express = require('express')
const app = express()
const port = process.env.PORT || 9000
require('dotenv').config()
const MessagingResponse = require('twilio').twiml.MessagingResponse

app.listen(port, () => { console.log(`You are listening on port: ${port}`) })

app.post('/sms', (request, response) => {
    const twiml = new MessagingResponse()

    twiml.message('I think you got the wrong number')


    response.writeHead(200, {'Content-Type': 'text/xml'})
    response.end(twiml.toString())
})

