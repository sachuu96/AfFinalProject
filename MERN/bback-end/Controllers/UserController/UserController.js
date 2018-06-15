const mongoose = require('../../DBSchema/DBConfig');

const UserSchema = mongoose.model('user');

var userController = function(){
    this.insertUser = function (data) {
        return new Promise(function(resolve, reject){
            var user = new UserSchema({
                username: data.username,
                password: data.password,
            });
            user.save().then(function(){
                resolve({status:200, message:'User inserted successfully'});
            }).catch(function(err){
                reject({status:500, message:'Error occur while adding User. Error :'+err});
            })
        });
    }

    this.getUser = function () {
        return new Promise((resolve, reject) => {
            UserSchema.find().exec().then((data)=>{
                resolve({status:200, message:data});
            }).catch((err)=>{
                reject({status:500, message:'Error occur while retrieving User data. Error :'+err});
            })
        })
    }

}

module.exports=new userController();