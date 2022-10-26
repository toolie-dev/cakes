module.exports = (req, res, next) => {
    if (!req.session.authorized) {
        res.status(401).send('Ви являєтеся неавторизовані')
        console.log(req.session)
    }
    next()
}