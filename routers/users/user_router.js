const express = require('express')
const router = express.Router()

const authUser = require('../../Controller/Users/AuthController')
const userReadAll = require('../../Controller/Users/ReadAllController')
const userReadId = require('../../Controller/Users/ReadIdController')
const userEdit = require('../../Controller/Users/UpdateController')
const userDisable = require('../../Controller/Users/DesableController')
router
//Create route
    .post('/register', authUser.signUp)
// Authenticate
    .post('/login', authUser.singIn)
//List route
    .get('/list_user/all',userReadAll.readAll)
//Read route
    .get('/list_user/:id',userReadId.readId)
//Edit route
    .put('/edit',userEdit.updatedUser)
// const readController = require('../../Controller/Users/ReadController')    
//      router.get('/list_user/:id?',readController.read)
    .put('/state',userDisable.disableUser)

module.exports = router


// const EditController = require('../Controller/Users/'
// const AuthController = require('../../Controller/Users/AuthController')
// import ReadController from './../Controller/Users/ReadController'
//Crear
// router.post('/register',AuthController.signUp)
//Ver
// router.get('/list_user/:id?',ReadController.read)
