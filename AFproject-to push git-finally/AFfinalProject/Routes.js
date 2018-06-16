'use strict'

const Express = require("express");

var Routes = Express.Router();

var SampleTypeRoute = require('./SampleCenterTypeController/Type.Route');
var SampleRoute = require('./SampleCenterController/Center.Route');
var TestNameRoute = require('./TestNameController/TestName.Route');
var UserRoutes = require('./User/user.route');
var DepRoute   = require('./LabDepartmentsController/Department.Route');
var LabRoute= require('./LaboratoryController/Lab.Route');
var TypeRoute = require('./LabTypeController/Type.Route');
var UserRoute = require('./UserController/User.Route');
var TestRoute = require('./Test/Test.Route');
var CategoryRoute = require('./Category/Category.Route');
var SubCategoryRoute = require('./SubCategory/SubCategory.Route');

Routes.use('/sample_center_types', SampleTypeRoute);
Routes.use('/sample_center', SampleRoute);
Routes.use('/test_name', TestNameRoute);
Routes.use('/labs', UserRoutes);
Routes.use('/user/', UserRoute);
Routes.use('/department/', DepRoute);
Routes.use('/laboratory/', LabRoute);
Routes.use('/type/', TypeRoute);
Routes.use('/test/',TestRoute);
Routes.use('/category/',CategoryRoute);
Routes.use('/subcategory/',SubCategoryRoute);

module.exports = Routes;
