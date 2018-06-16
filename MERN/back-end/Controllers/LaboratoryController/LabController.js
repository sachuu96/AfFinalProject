const mongoose = require('../../DBSchema/DBConfig');

const LaboratorySchema = mongoose.model('laboratories');

var LaboratoryController = function(){
    this.insertLab = function (data) {
        return new Promise(function(resolve, reject){
            var lab = new LaboratorySchema({
                lab_name: data.lab_name,
                lab_type: data.lab_type,
                department: data.department,
                count: data.count,
                incharge: data.incharge,
                location: data.location,
                email: data.email,
                contact_1: data.contact_1,
                contact_2: data.contact_2
            });
            lab.save().then(function(){
                resolve({status:200, message:'Laboratory inserted successfully'});
            }).catch(function(err){
                reject({status:500, message:'Error occur while adding Laboratory. Error :'+err});
            })
        });
    }

    this.updateLab = function (id,data) {
        return new Promise(function (resolve, reject) {
            LaboratorySchema.update({_id:id} , data).then(function (data) {
                resolve({status:200, message:"Laboratory Updated Successfully"});
            }).catch(function (err) {
                reject({status:500, message:"Error while updating Laboratory.Error :" + err});
            });
        });
    }

    this.deleteLab = function (id) {
        return new Promise((resolve, reject) => {
            LaboratorySchema.remove({_id:id}).then(()=>{
                resolve({status:200, message:'Laboratory deleted successfully'});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while deleting Laboratory. Error :'+err});
            });
        });
    }

    this.getLabs = function () {
        return new Promise((resolve, reject) => {
            LaboratorySchema.find().exec().then((data)=>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while retrieving Laboratory data. Error :'+err});
            })
        })
    }

    this.findLab = function (id) {
        return new Promise((resolve, reject) => {
            LaboratorySchema.find({_id:id}).exec().then((data) =>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:404, message:'Laboratory  not found. Error :'+err});
            })
        })
    }
}

module.exports=new LaboratoryController();