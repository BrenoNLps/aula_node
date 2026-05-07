const router = require('express').Router() 
const Usuario = require('./models/Usuario')


//Método GET
router.get('/usuario', async (req, res) => { 
const usuario = await Usuario.findAll() 
res.json(usuario) 
}) 

//Método POST
router.post('/usuario', async (req, res) => { 
const usuario = await Usuario.create(req.body) 
res.status(201).json(usuario) 
})

//Método DELETE
router.delete('/usuario/:id', async (req, res) => { 
const usuario = await Usuario.findByPk(req.params.id) 
await usuario.destroy() 
res.status(204).send() 
})

//Método PUT
router.put('/usuario/:id', async (req, res) => { 
const usuario = await Usuario.findByPk(req.params.id) 
await usuario.update(req.body) 
res.json(usuario) 
})

//Método PATCH
router.patch('/usuario/:id', async (req, res) => { 
const usuario = await Usuario.findByPk(req.params.id) 
await usuario.update(req.body) 
res.json(usuario) 
})

module.exports = router
