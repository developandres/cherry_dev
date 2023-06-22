const express = require('express')
const app = express();
//llama a todas las rutas
const Routes = require('./routers');
const bodyParser = require('body-parser');
require('dotenv').config()
const db = require('../cherry_sequelize/models')
const User = db.User
const Transaction = db.User


const Port = process.env.PORT || 4000;

app.listen(Port,function(){
    console.log(`Te has conectado a localhost: ${Port}`) 
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


//Ruta usuarios
app.use('/api',Routes)
