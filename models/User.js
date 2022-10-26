const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        min: 2
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator(number) {
                if (validator.isMobilePhone(number)) return true
            },
            message: props => `${props.number} is not a valid phone number`
        }
    },
    photo: {
        type: Buffer
    },
    description: {
        type: String,
        max: 1000
    }
})

const UserModel = new mongoose.model('User', UserSchema)

module.exports = UserModel