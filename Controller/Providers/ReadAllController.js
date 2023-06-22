const providerService = require('../../services/provider.service');

const ReadAll = async(req, res) =>{
    res.json(await providerService.getUsers());
}
module.exports = {
    ReadAll
}