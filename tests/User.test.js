const request = require('supertest')
const mongoose = require('mongoose')
const load = require('../utils/load')
const app = require('../server')
const User = load('model', 'User')

const user = {
    name: 'Jimmy Neutron',
    phone: '+380674224745',
    _id: mongoose.Types.ObjectId()
}


test('Should register a user', async () => {
    await User.deleteMany()
    const responseOne = await request(app)
            .post('/register?action=register&role=seller')
            .send(user)
            .expect(200)
    const code = responseOne.text
    const cookie = responseOne.headers['set-cookie']
    expect(code).not.toBeNull()
    
    const responseTwo = await request(app)
            .post('/register?action=verify')
            .set('Cookie', cookie)
            .send({ code })
            .expect(201)
    const userResponse = responseTwo.body
    expect(userResponse.name).toBe(user.name)
    expect(userResponse.phone).toBe(user.phone)
})

test('Should not register a user again', async () => {
    await request(app)
        .post('/register?action=register&role=seller')
        .send(user)
        .expect(400)
})

test('Should sign in a user', async () => {
    const responseOne = await request(app)
            .post('/sign_in?action=sign_in')
            .send({ phone: user.phone })
            .expect(200)
    const code = responseOne.text
    const cookie = responseOne.headers['set-cookie']
    expect(code).not.toBeNull()
    
    const responseTwo = await request(app)
            .post('/sign_in?action=verify')
            .set('Cookie', cookie)
            .send({ code })
            .expect(200)
    const userResponse = responseTwo.body
    expect(userResponse.name).toBe(user.name)
    expect(userResponse.phone).toBe(user.phone)
    await User.deleteMany()
})