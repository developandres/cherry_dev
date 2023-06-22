const userService = require('../../services/user.service')


const readId = async(req,res) =>{

    const findId = {
        id:req.params.id
    }

    await userService.getUsersId(findId).then(user => {
        return res.json(user)
    })
}

module.exports = {
    readId
}

// module.exports = {

//     async read(req,res){
        
//     
//         // if(!id){
            
//         //     User.findByPk(id).then(users =>{
//         //         if (!users){
//         //             return res.status(404).json({message: 'Usuario no encontrado'})
//         //         }
//         //         res.json(users)
//         //     })

//         // } else{
//         //     User.findAll(id).then(users =>{
//         //         res.json(users)
//         //     })
//         // }
//     }

// }
