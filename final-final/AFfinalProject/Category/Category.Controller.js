'use strict'
var mongoose = require('../DBSchema/DBConfig');
var CategorySchema = mongoose.model('Category');

var CategoryController = function () {
    this.insertCategory = function (data) {
        return new Promise(function (resolve, reject) {
            var category = new CategorySchema({
                categoryId:data.categoryId,
                categoryName:data.categoryName,
                subcategoryName:data.subcategoryName,
                specimen_Type:data.specimen_Type,
                specimen_Retention_Type:data.specimen_Retention_Type,
                duration:data.duration
            });
            category.save().then(function () {
                resolve({status:200,message:"Added new Category Successfully"});
            }).catch(function (err) {
                reject({status:500,message:"Error:-"+err});
            })
        })
    }

    this.searchAllCategory = function () {
        return new Promise(function (resolve, reject) {
            CategorySchema.find().exec().then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (err) {
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
    this.searchCategory = function (id) {
        return new  Promise(function (resolve, reject) {
            CategorySchema.find({_id:id}).exec().then(function (category) {
                resolve({status:200,data:category});
            }).catch(function (err) {
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
    this.updateCategory = function (id,data) {
        return new  Promise(function (resolve, reject) {
            CategorySchema.update({_id:id},data).then(function () {
                resolve({status:200,message:"Updated Category Successfully."});
            }).catch(function (err) {
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
    this.deleteCategory = function (id) {
        return new  Promise(function (resolve, reject) {
            CategorySchema.remove({_id:id}).then(function () {
                resolve({status:200 , message: "Remove category details successfully"});
            }).catch(function (err) {
                reject({status:500 , message:"Error:-"+err});
            })
        })
    }

}

module.exports = new CategoryController();