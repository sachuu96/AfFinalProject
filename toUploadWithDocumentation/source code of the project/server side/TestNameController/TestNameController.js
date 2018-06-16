const mongoose = require("../DBSchema/DBConfig");
var TestNameSchema = mongoose.model('TestName');

var TestNameController = function () {
    this.insertTestName = function (data) {
        return new Promise(function (resolve, reject) {
            var Test = new TestNameSchema({
                labName: data.labName,
                catName: data.catName,
                subcatName: data.subcatName,
                testName: data.testName

            });

            Test.save().then(function () {
                resolve({status: 200, message: "Success!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error: "+ err});
            })
        })
    }

    this.getAllTestNames = function () {
        return new Promise(function (resolve, reject) {
            TestNameSchema.find().exec().then(function (data) {
                resolve({status: 200, Userdata: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.getTestName = function (id) {
        return new Promise(function (resolve, reject) {
            TestNameSchema.find({_id: id}).exec().then(function (data) {
                resolve({status: 200, userSearched: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.updateTestName = function (id, data) {
        return new Promise(function (resolve, reject) {
            TestNameSchema.update({_id: id}, data).exec().then(function (data) {
                resolve({status: 200, message: "Updated!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error "+ err});
            })
        })
    }

    this.deleteTestName = function (id) {
        return new Promise(function (resolve, reject) {
            TestNameSchema.remove({_id: id}).then(function (data) {
                resolve({status: 200, message: "Deleted"});
            }).catch(function (err) {
                reject({status: 500, message: "Not found"});
            })
        })
    }

    this.deleteAllTestNames = function () {
        return new Promise(function (resolve, reject) {
            TestNameSchema.remove().then(function (data) {
                resolve({status: 200, message: "All test names deleted"});
            }).catch(function (err) {
                reject({status: 500, message: "Tests not found"});
            })
        })
    }
}

module.exports = new TestNameController();