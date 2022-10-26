const load = require('../utils/load')
const User = load('model', 'User')
const randomNumber = require('random-number')
const validator = require('validator')

module.exports = async (req, res) => {
    const action = req.query.action
    const code = randomNumber({ min: 1000, max: 9999, integer: true })
    switch(action) {
        case 'sign_in':
            const phone = req.body.phone
            if (!phone) {
                res.status(400).send('Номер телефону не був впроваджений')
                break
            }
            if (!validator.isMobilePhone(phone)) {
                res.status(400).send('Невірний номер телефону')
                break
            }
            const doesUserExists = await User.exists({ phone })
            if (!doesUserExists) {
                console.log(doesUserExists)
                res.status(404).send('Користувача з таким номером телефону не існує')
                break
            }
            req.session.user = {  }
            req.session.user.phone = phone
            req.session.code = code
            res.send(code.toString())
            break
        case 'verify': 
            if (req.body.code != req.session.code) {
                res.status(400).send('Невірний код')
                break
            }
            if (!validator.isMobilePhone(req.session.user.phone)) {
                res.status(400).send()
                console.log(req.session.user.phone)
                break
            }
            const user = await User.findOne({ phone: req.session.user.phone })
            req.session.user = user
            req.session.authorized = true
            res.send(user)
            break
    }
}