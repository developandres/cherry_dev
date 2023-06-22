const db = require('../models')

//Trae el modeo users
const user_model = db.User;

// ||--CREATE--||
exports.createUser = async(userBody) =>{
    return await user_model.create(userBody)
}
// ||--READ--||
//Obtener todos los usuarios
exports.getUsers = async () => {
    return user_model.findAll()
}
//Obtener usuario por id
exports.getUsersId = async (objId) =>{
    return await user_model.findAll({ where: objId})
}
exports.updateUser = async (id,userBody) =>{ 

    user_model.update(
        userBody
    ,{
        where:{
            id
        }
    }).then(data => {
        return data
    }).catch(err => {
        return err
    })

}
exports.disable = async (id_user) => {
    user_model.findByPk(id_user)
} 
        




// exports.getUsersIdorAll = async (objId) =>{
//     return await user_model.findAll({ where: objId})
// }
