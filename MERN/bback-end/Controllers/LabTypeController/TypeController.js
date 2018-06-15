const mongoose = require('../../DBSchema/DBConfig');

const LabTypeSchema = mongoose.model('lab_type');

var LabController = function(){
    this.insertType = function (data) {
        return new Promise(function(resolve, reject){
            var labType = new LabTypeSchema({
                lab_type_name: data.lab_type_name,
            });
            labType.save().then(function(){
                resolve({status:200, message:'Laboratory Type inserted successfully'});
            }).catch(function(err){
                reject({status:500, message:'Error occur while adding Laboratory Type. Error :'+err});
            })
        });
    }

    this.updateType = function (id,data) {
        return new Promise(function (resolve, reject) {
            LabTypeSchema.update({_id:id} , data).then(function (data) {
                resolve({status:200, message:"Laboratory Type Updated Successfully"});
            }).catch(function (err) {
                reject({status:500, message:"Error while updating Laboratory Type.Error :" + err});
            });
        });
    }

    this.deleteType = function (id) {
        return new Promise((resolve, reject) => {
            LabTypeSchema.remove({_id:id}).then(()=>{
                resolve({status:200, message:'Laboratory Type deleted successfully'});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while deleting Laboratory Type. Error :'+err});
            });
        });
    }

    this.getTypes = function () {
        return new Promise((resolve, reject) => {
            LabTypeSchema.find().exec().then((data)=>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while retrieving Laboratory Type data. Error :'+err});
            })
        })
    }

    this.findType = function (id) {
        return new Promise((resolve, reject) => {
            LabTypeSchema.find({_id:id}).exec().then((data) =>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:404, message:'Laboratory Type not found. Error :'+err});
            })
        })
    }
}

module.exports=new LabController();