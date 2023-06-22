const userService = require('../../services/user.service')
//Envia el resultado de la logica a la ruta
const readAll = async(req,res) =>{
    res.json(await userService.getUsers());
}
module.exports = {
    readAll
}   


