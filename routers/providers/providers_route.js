const express = require ('express');
const router = express.Router();


const CreateController = require('../../Controller/Providers/CreateController')
const ProviderReadId = require('../../Controller/Providers/ReadIdController')
const ProviderReadALL = require('../../Controller/Providers/ReadAllController')
const ProviderEdit =  require('../../Controller/Providers/EditController')


router
    // CREATE
    .post('/register',CreateController.Create)
    
    // Read all
    .get('/list_provider/all/',ProviderReadALL.ReadAll)
    // Read bY id
    .get('/list_provider/:id',ProviderReadId.ReadId)
    // Edit 
    .put('/edit_provider',ProviderEdit.Update)




module.exports = router