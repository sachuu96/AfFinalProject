const Express = require('express');
var DepRoute   = require('./Controllers/LabDepartmentsController/Department.Route');
var LabRoute= require('./Controllers/LaboratoryController/Lab.Route');
var TypeRoute = require('./Controllers/LabTypeController/Type.Route');
var UserRoute = require('./Controllers/UserController/User.Route');
const Routes = Express.Router();

Routes.use('/user/', UserRoute);
Routes.use('/department/', DepRoute);
Routes.use('/laboratory/', LabRoute);
Routes.use('/type/', TypeRoute);
module.exports= Routes;