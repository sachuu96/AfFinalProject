const mongoose = require("../DBSchema/DBConfig");
var TypeSchema = mongoose.model('CenterTypes');

var TypeController = function () {
    this.insertType = function (data) {
        return new Promise(function (resolve, reject) {
            var Type = new TypeSchema({
                typeName: data.typeName,

            });

            Type.save().then(function () {
                resolve({status: 200, message: "Success!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error: "+ err});
            })
        })
    }

    this.getAllTypes = function () {
        return new Promise(function (resolve, reject) {
            TypeSchema.find().exec().then(function (data) {
                resolve({status: 200, Userdata: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.getType = function (id) {
        return new Promise(function (resolve, reject) {
            TypeSchema.find({_id: id}).exec().then(function (data) {
                resolve({status: 200, userSearched: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.updateType = function (id, data) {
        return new Promise(function (resolve, reject) {
            TypeSchema.update({_id: id}, data).exec().then(function (data) {
                resolve({status: 200, message: "Updated!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error "+ err});
            })
        })
    }

    this.deleteType = function (id) {
        return new Promise(function (resolve, reject) {
            TypeSchema.remove({_id: id}).then(function (data) {
                resolve({status: 200, message: "User deleted"});
            }).catch(function (err) {
                reject({status: 500, message: "User not found"});
            })
        })
    }

    this.deleteAllType = function () {
        return new Promise(function (resolve, reject) {
            TypeSchema.remove().then(function (data) {
                resolve({status: 200, message: "All users deleted"});
            }).catch(function (err) {
                reject({status: 500, message: "Users not found"});
            })
        })
    }

    this.maxId = function () {
        return new Promise(function (resolve, reject) {
            TypeSchema.findOne().sort('-_id').then(function (data) {
                resolve({status:200, maxIddata:data});
            }).catch(function (reason) {
                reject({status:404, message:"ID error"});
            })
        });
    }
}

module.exports = new TypeController();