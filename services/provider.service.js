const db = require('../models');

const provider_model = db.Providers;

exports.register = async(providerBody) =>{
    return await provider_model.create(providerBody)
}
exports.getProvidersId = async(ObjId) =>{
    return provider_model.findAll({ where:ObjId }) 
}
exports.getUsers = async () =>{
    return await provider_model.findAll();
}

exports.updateprovider = async (id,providerBody) =>{
    provider_model.update(
        providerBody,
        {
            where:{
                id
            }
        }).then(data =>{
            return data
        }).catch(err =>{
            return err
        })
}
