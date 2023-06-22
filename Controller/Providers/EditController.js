const { error } = require('console');
const providerService = require('../../services/provider.service');
const { Model } = require('sequelize');

const Update = async (req, res) => {
    
    const id = req.body.id

    const ProviderBody = req.body

    await providerService.updateprovider(id,ProviderBody).then(newprovider =>{
        res.json({
            msg:'Usuario editado correctamente',
            newprovider: newprovider
        })
    }).catch(err =>{
        res.status(500).json({
            msg:'El usuario no se pudo editar',
            err: err
        })
    })
}
module.exports = {
    Update
}