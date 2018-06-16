const mongoose = require("../DBSchema/DBConfig");
var CenterSchema = mongoose.model('SampleCenter');

var CenterController = function () {
    this.insertCenter = function (data) {
        return new Promise(function (resolve, reject) {
            var Center = new CenterSchema({
                typeName: data.typeName,
                centerName:data.centerName,
                incharge:data.incharge,
                locn:data.locn,
                emailaddress:data.emailaddress,
                cont1:data.cont1,
                cont2:data.cont2

            });

            Center.save().then(function () {
                resolve({status: 200, message: "Success!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error: "+ err});
            })
        })
    }

    this.getAllCenters = function () {
        return new Promise(function (resolve, reject) {
            CenterSchema.find().exec().then(function (data) {
                resolve({status: 200, Userdata: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.getCenter = function (id) {
        return new Promise(function (resolve, reject) {
            CenterSchema.find({_id: id}).exec().then(function (data) {
                resolve({status: 200, userSearched: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.updateCenter = function (id, data) {
        return new Promise(function (resolve, reject) {
            CenterSchema.update({_id: id}, data).exec().then(function (data) {
                resolve({status: 200, message: "Updated!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error "+ err});
            })
        })
    }

    this.deleteCenter = function (id) {
        return new Promise(function (resolve, reject) {
            CenterSchema.remove({_id: id}).then(function (data) {
                resolve({status: 200, message: "User deleted"});
            }).catch(function (err) {
                reject({status: 500, message: "User not found"});
            })
        })
    }

    this.deleteAllCenters = function () {
        return new Promise(function (resolve, reject) {
            CenterSchema.remove().then(function (data) {
                resolve({status: 200, message: "All users deleted"});
            }).catch(function (err) {
                reject({status: 500, message: "Users not found"});
            })
        })
    }
}

module.exports = new CenterController();