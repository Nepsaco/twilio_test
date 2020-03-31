require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.messages
    .create({
        body: 'hello, this is a test',
        from: '+19282284608',
        to: '+19706188883',
    })
    .then(message => console.log(message.sid))

module.exports = client
