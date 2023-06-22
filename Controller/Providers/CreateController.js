const providerService = require('../../services/provider.service')
const db = require('../../models')
const Provider = db.Provider 

const Op = db.Sequelize.Op;

const Create = async (req, res) =>{
    
    const { name,phone,enterprise,idUsuario } = req.body

    const newProvider = await providerService.register({
        name,
        phone,
        idUsuario,
        enterprise
    }).then(newProviders =>{
        res.status(200).json({
            newProviders:newProviders,
            msg:'Proveedor creado correctamente',

        })
    }).catch(err =>{
        res.status(500).json({
            msg:'El proveedor no se pudo crear',
            err: err
        })
    })
} 


module.exports = {
    Create
}
