const validator = require('validator')
const load = require('../utils/load')
const User = load('model', 'User')
const randomNumber = require('random-number')

module.exports = async (req, res) => {
    const action = req.query.action
    switch(action) {
        case 'register':
            const { name, phone} = req.body
            const role = req.query.role
            if (!name || !phone || (!typeof(name == String)) || !validator.isMobilePhone(phone)) {
                res.status(400).send('Не правильний номер телефону або відсутнє ім\'я')
                break
            }
            const doesUserExists = await User.exists({ phone })
            if (doesUserExists) {
                res.status(400).send('Користувач з таким телефоном уже існує')
                break
            }
            if (!role || role != ('seller' || 'buyer')) {
                res.status(400).send()
                break
            }
            req.session.user = {  }
            req.session.user.name = name
            req.session.user.phone = phone
            req.session.user.role = role
            req.session.code = randomNumber({ min: 1000, max: 9999, integer: true })
            res.status(200).send(req.session.code.toString())
            break
        case 'verify':
            const { code } = req.body
            if (!code) {
                res.status(400).send('Відсутній верифікаційний код')
                break
            }
            if (!req.session.user) {
                res.status(401).send()
            }
            if (req.body.code != req.session.code) {
                res.status(400).send('Невірний верифікаційний код')
                break
            }
            try {
                const user = await new User(req.session.user).save()
                req.session.authorized = true
                res.status(201).send(user)
            } catch(e) {
                res.status(500).send(e.toString())
            }

    }
    
}