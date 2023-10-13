//aca agrego el cod del servidor
const express  = require('express');
const mongoose = require('mongoose');
const app      = express();
const port     = 3000;
require('dotenv').config();

//requerimos las rutas
const userRoutes       = require('./routes/user');
const productsRoutes   = require('./routes/products');
const ordersRoutes     = require('./routes/orders');
const categoriesRoutes = require('./routes/categories');

//middleware
app.use(express.json());
app.use(
    '/api', 
    userRoutes, 
    productsRoutes,
    ordersRoutes,
    categoriesRoutes
);

//rutas
app.get('/', (req, res) => {
    res.send('API REST Parcial 1')
});

//mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Estas conectado :)'))
    .catch((err) => console.log('Error de conexion :(', err))

app.listen(port, () => console.log('El servidor funciona correctamente en el puerto', port));