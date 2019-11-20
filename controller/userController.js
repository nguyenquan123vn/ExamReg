const userModel = require('../model/userModel');

function userModel(response, request, next)
{
    userModel.login(request.params.id, request.params.password, response);
}

module.exports = {
    userModel: userModel
}