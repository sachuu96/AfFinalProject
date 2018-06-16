'use strict'

var mongoose = require('../DBSchema/DBConfig');
var SubCategorySchema = mongoose.model('SubCategory');

var SubCategoryController = function () {
    this.insertSubCategory = function (data) {
        return new  Promise(function (resolve, reject) {
            var sub = new SubCategorySchema({
                subcategoryId:data.subcategoryId,
                subcategoryName:data.subcategoryName,
                categoryName:data.categoryName
            });
            sub.save().then(function () {
                resolve({status:200, message:" Added new Sub Category Successfully"});
            }).catch(function (err) {
                reject({status:500 , message:" Error:- "+err});
            })
        })
    }

    this.searchAllSubCategory = function () {
        return new  Promise(function (resolve, reject) {
            SubCategorySchema.find().exec().then(function (data) {
                resolve({status:200 , data:data});
            }).catch(function (err) {
                reject({status:500 , message:"Error:-" + err});
            })
        })
    }
    this.searchSub = function (id) {
        return new  Promise(function (resolve, reject) {
            SubCategorySchema.find({_id:id}).exec().then(function (subcategory) {
                resolve({status:200 , data:subcategory});
            }).catch(function (err) {
                reject({status:500 , message:"Error:-" + err});
            })
        })
    }
    this.updateSub = function (id,data) {
        return new  Promise(function (resolve, reject) {
            SubCategorySchema.update({_id:id},data).then(function () {
                resolve({status:200 , message: " Updated Sub Category Successfully..!"});
            }).catch(function (err) {
                reject({status:500 , message:"Error:-" + err});
            })
        })
    }

    this.deleteSub = function (id) {
        return new  Promise(function (resolve, reject) {
            SubCategorySchema.remove({_id:id}).then(function () {
                resolve({status:200 , message:" Remove Sub Category Details Successfully..!"});
            }).catch(function (err) {
                reject({status:500 , message:"Error:-"+err});
            })
        })
    }

}

module.exports = new SubCategoryController();