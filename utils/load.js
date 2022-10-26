const path = require('path')

const dir = path.join(__dirname, '../')

const load = (type, query) => {
    const dirs = {
        routers: '/routers',
        models: '/models',
        middlewares: '/middlewares',
        handlers: '/handlers',
        utils: '/utils'
    }
    const createPath = (type, query, ending = 's') => {
        return path.join(dir, dirs[type + 's'], query + '.js')
    }
    try {
        return require(createPath(type, query))
    } catch(e) {
        return require(createPath(type, query, 'es'))
    }
}

module.exports = load