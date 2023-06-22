const providerservice = require('../../services/provider.service');

const ReadId = async(req, res) =>{
    const findId = {
        id:req.params.id
    }
    await providerservice.getProvidersId(findId).then(user =>{
        return res.json(user)
    }).catch(err =>{
        res.status(500).json({
            msg:'No se encontro un usuario por ese id',
            err: err
        })
    })
} 

module.exports = {
    ReadId
}