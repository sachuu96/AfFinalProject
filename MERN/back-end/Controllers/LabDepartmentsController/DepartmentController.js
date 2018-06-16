const mongoose = require('../../DBSchema/DBConfig');

const DepartmentSchema = mongoose.model('department');

var departmentController = function(){
    this.insertDepartment = function (data) {
            return new Promise(function(resolve, reject){
                var department = new DepartmentSchema({
                    department_name: data.department_name,
                });
                department.save().then(function(){
                    resolve({status:200, message:'Department inserted successfully'});
                }).catch(function(err){
                    reject({status:500, message:'Error occur while adding Department. Error :'+err});
                })
            });
    }

    this.updateDepartment = function (id,data) {
        return new Promise(function (resolve, reject) {
                DepartmentSchema.update({_id:id} , data).then(function (data) {
                    resolve({status:200, message:"Department Updated Successfully"});
                }).catch(function (err) {
                    reject({status:500, message:"Error while updating department.Error :" + err});
                });
        });
    }

    this.deleteDepartment = function (id) {
        return new Promise((resolve, reject) => {
            DepartmentSchema.remove({_id:id}).then(()=>{
                resolve({status:200, message:'Department deleted successfully'});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while deleting department. Error :'+err});
            });
        });
    }

    this.getDepartments = function () {
        return new Promise((resolve, reject) => {
            DepartmentSchema.find().exec().then((data)=>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while retrieving Department data. Error :'+err});
            })
        })
    }

    this.findDepartment = function (id) {
        return new Promise((resolve, reject) => {
            DepartmentSchema.find({_id:id}).exec().then((data) =>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:404, message:'Department not found. Error :'+err});
            })
        })
    }
}

module.exports=new departmentController();