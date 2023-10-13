const express    = require('express');
const userSchema = require('../models/userSchema');
const router     = express.Router();

//creamos users
router.post('/users', (req, res) => {
    const user = userSchema(req.body);

    user.save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

//obtener todos los users
router.get('/users', (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

//obtener un user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;

    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

//actualizar un user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    userSchema.updateOne({ _id: id }, { $set: { name, email } })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

//eliminar un user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    userSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

module.exports = router;