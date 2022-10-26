const express = require('express')
const load = require('./utils/load')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('DB is running'))
    .catch(err => console.log('DB has failed to run'))

const server = express()

// Configuration
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())

server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48 // Two days
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_CONNECTION_STRING
    })
}))

// Routes

server.use('/register', load('router', 'register'))

server.use('/sign_in', load('router', 'sign_in'))

module.exports = server