const userService = require('../../services/user.service')
// const Encrypt = require('../../middleware/auth')

const updatedUser = async(req,res) =>{

    const id = req.body.id

    const userBody = req.body

    // userBody.password = await Encrypt.cryptPassword(req.body.password)

    await userService.updateUser(id,userBody).then(newUser => {
        
        res.json({
            msg:'Usuario editado satisfactoriamente',
            newUser: newUser
        })

    }).catch(error =>{

        res.status(500).json({
            msg:'Usuario no editado satisfactoriamente',
            error: error
        })

    })
}

module.exports = {
    updatedUser
}