const userService = require('../../services/user.service')
const Sequelize = require('sequelize');
const db = require('../../models')
const { QueryTypes } = require('sequelize')
const User = db.User
const sequelize = db.sequelize

const disableUser = async (req,res)=> {

    const id_user = req.body.id

    User.findByPk(id_user, 
    {
        attributes: ['state'] 
        
    }).then(user => {

        if (user){
            
            const status = user.state

            if (status === 'Inactivo'){

                User.update({
                    state: 'Activo' 
                },{
                    where: {id:id_user}
                }).then(update =>{

                    res.json({
                        msg:'Estado Activo',
                        update: update
                    })
                })

            }else{

                User.update({
                    state: 'Inactivo'
                },{
                    where: {id:id_user}
                }).then(update => {

                    res.json({
                        msg:'Estado inactivo',
                        update:update
                    })
                })

            }

        }else{
            res.json({msg:'No se encontro el usuario.'})
        }
    })

    
}

module.exports = {
    disableUser
}