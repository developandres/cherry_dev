const Encrypt = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/config_token')
const userService = require('../../services/user.service')
const db = require('../../models')
const User = db.User
const Op = db.Sequelize.Op;

const singIn = async (req,res)=>{

    const name = req.body.name
    const password = req.body.password

    await User.findOne({
        where:{
            name:name
        }
    }).then(async (userLogin) => {

        const password_compared = await Encrypt.comparePassword(password,userLogin.password);
        
        if(password_compared){

            const token = jwt.sign(
                {userLogin}, process.env.TOKEN_KEY, { expiresIn: "2h", }
            )

            res.status(200).send({
                userLogin: userLogin,
                msg: 'Ha iniciado sesion correctamente',
                status:true,
                method: req.method,
                token: token,
              })

        }else{

            res.status(200).send({
                data: null,
                msg: 'Credenciales incorrectas',
                status:'false',
                method: req.method,
                token: null,
            })
        }
    })
}

const signUp = async (req,res) =>{

    const {name,email,state,phone,rol} = req.body
    

    const password_hash = await Encrypt.cryptPassword(req.body.password)
    
    try{
        const newUser = await userService.createUser({
            name,
            email,
            state,
            phone,
            password: password_hash,
            rol
    
        })
        
        const token = jwt.sign(
            {newUser}, process.env.TOKEN_KEY, { expiresIn: "2h", }
        )
        
        res.status(200).send({
            token:token,
            newUser: newUser,
            msg:'Usuario creado satisfactoriamente',
        });
   
    } catch(error){
        res.status(500).json({
            msg: 'Error al crear el usuario',
            error: error
        })
    }

}

module.exports = {
    signUp,
    singIn
}