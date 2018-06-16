'use strict'

var mongoose = require('../DBSchema/DBConfig');
var TestSchema = mongoose.model('Test');

var TestController = function () {
    this.insertTest = function (data) {
        return new Promise(function (resolve, reject) {
            var test = new TestSchema({
                testid: data.testid,
                testname: data.testname,
                category: data.category,
                subcategory: data.subcategory
            });
            test.save().then(function () {
                resolve({status: 200, message: "Added new test"});
            }).catch(function (err) {
                reject({status: 500, message: "Error" + err});
            })
        })
    }
    this.searchAllTest = function () {
        return new Promise(function (resolve, reject) {
            TestSchema.find().exec().then(function (data) {
                resolve({status: 200, data: data});
            }).catch(function (err) {
                reject({status: 500, message: "Error:-" + err});
            })
        })
    }
    this.searchTest = function (id) {
        return new Promise(function (resolve, reject) {
            TestSchema.findOne({_id: id}).exec().then(function (test) {
                resolve({status: 200, data: test});
            }).catch(function (err) {
                reject({status: 500, message: "Error:-" + err});
            })
        })
    }

    this.updateTest = function (id, data) {
        return new Promise(function (resolve, reject) {
            TestSchema.update({_id: id}, data).then(function () {
                resolve({status: 200, message: "Update Test Successfully !"});
            }).catch(function (err) {
                reject({status: 500, message: "Error:-" + err});
            })
        })
    }
    this.deleteTest = function (id) {
        return new Promise(function (resolve, reject) {
            TestSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: "Remove Test details successfully..!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error:-" + err});
            })
        })
    }
}



module.exports = new TestController();