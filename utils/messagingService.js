const accountSid = 'ACe0ec79cb7bd2a49c414f915156a452a3'
const authToken = '8a9c4d6fa57e89df63a920f1cfc3482b'

const client = require('twilio')(accountSid, authToken)

const message = async (body, phone) => {
    try {
        const status = await client.messages.create({ 
            body,
            messagingServiceSid: 'MG39b3b3254598e6edc6975a1fd6f19860',      
            to: phone
        })
        return status
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = message