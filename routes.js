const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', { mensagem: 'Hello World' })
})
router.get('/usuario/:id', (req, res) => {
    res.render('usuario', { id: req.params.id })
})
router.get('/usuario', (req, res) => {
    res.render('usuario', { nome: req.query.nome })
})
router.post('/usuario', (req, res) => {
    const { nome } = req.body
    res.render('usuario', { mensagem: `Usuário ${nome} criado` })
})
module.exports = router