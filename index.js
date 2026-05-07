const sequelize = require('./db')
const server = require('./server')

sequelize.sync().then(() => {
    server.listen(process.env.PORT || 3000, () => {
        console.log('Servidor e banco prontos')
    })
})
