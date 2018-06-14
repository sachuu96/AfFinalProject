var mongoose    = require('../mongoose.config');
var UserSchema 	= mongoose.model('User');
var UserSchema2 = mongoose.model('Specimen');
var testReqSchema = mongoose.model('TestRequest');
var patientSchema = mongoose.model('Patient');
var UserController = function() {

	this.add = function(userInstance) {
		return new Promise((resolve, reject) => {
			var user = new UserSchema({
                name: userInstance.name
            })
			user.save().then(() => {
				resolve({'status': 200, 'message':'added new user'});
			}).catch(err => {
				reject({'status': 404, 'message':'err:-'+err});
			})
		})
	}


//add patient Details
this.addPatientDetails = function(data){
	return new Promise(function(resolve,reject){
		var patient = new patientSchema({
			HIN:data.HIN,
			name:data.name,
			dob:data.dob,
			gender:data.gender
		})
		patient.save().then(function(){
			resolve({'status': 200, 'message':'added patient details'});
		}).catch(function(err){
			reject({'status': 404, 'message':'err:-'+err});
		})
	})
}

//add specimen details
this.addSpecimen = function(userInstance){
	return new Promise(function(resolve,reject){
		var specimen = new UserSchema2({
			reqId:userInstance.reqId,
			testType:userInstance.testType,
			retentionType:userInstance.retentionType,
			collectedDate:userInstance.collectedDate,
			remarks:userInstance.remarks,
			location:userInstance.location,
			storedORdestroyed:userInstance.storedORdestroyed,
			sORdDate:userInstance.sORdDate
		})
		specimen.save().then(function(){
			resolve({'status':200,'message':'added new specimen!'})
		}).catch(function(err){
			reject({'status':404,'message':'err - '+err});
		})
	})
}

//add test Requests
this.addTestRequests=function(data){
	return new Promise(function(resolve,reject){
		var testRequest = new testReqSchema({
			action:data.action,
			priority:data.priority,
			status:data.status,
			id:data.id,
			HIN:data.HIN,
			testName:data.testName,
			rDate:data.rDate,
			dDate:data.dDate,
			reqPerson:data.reqPerson,
			comments:data.comments
		})
		testRequest.save().then(function(){
			resolve({'status':200,'message':'added new test request'})
		}).catch(function(err){
			reject({'status':404,'message':'err - '+err});
		})
	})
}

	this.getAll = function() {
		return new Promise((resolve, reject) => {
			UserSchema.find().exec().then(data => {
                resolve({'status': 200, 'message':'get all data', 'data': data});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
			})
		})
	}

//get patient Details
this.getAllPatientDetails=function(){
	return new Promise((resolve, reject) => {
		patientSchema.find().exec().then(data => {
							resolve({'status': 200, 'message':'get all patient data', 'data': data});
		}).catch(err => {
							reject({'status': 404, 'message':'err:-'+err});
		})
	})
}

//get all specimen details
this.getAllSpecimen = function(){
	return new Promise(function(resolve,reject){
		UserSchema2.find().exec().then(function(data){
			resolve({'status':200,'message':'get all data','data':data});
		}).catch(function(err){
			reject({'status':404,'message':'err:- '+err});
		})
	})
}

//get all test requests
this.getAllTestReq=function(){
	return new Promise(function(resolve,reject){
		testReqSchema.find().exec().then(function(data){
			resolve({'status':200,'message':'get all test request data','data':data});
		}).catch(function(err){
			reject({'status':404,'message':'err:- '+err});
		})
	})
}

//get specific patient details
this.getSpecificPatientDetails = function(id){
	return new Promise((resolve, reject) => {
		patientSchema.find({HIN: id}).exec().then(data => {
							resolve({'status': 200, 'message':'get single data', 'data': data});
		}).catch(err => {
							reject({'status': 404, 'message':'err:-'+err});
					})
	})
}

//get one specimen detail according to request id
this.getSpecificSampleDetail = function(id){
	return new Promise((resolve, reject) => {
		UserSchema2.find({reqId: id}).exec().then(data => {
							resolve({'status': 200, 'message':'get single data', 'data': data});
		}).catch(err => {
							reject({'status': 404, 'message':'err:-'+err});
					})
	})
}

	this.getSingle = function(id) {
		return new Promise((resolve, reject) => {
			UserSchema.find({_id: id}).exec().then(data => {
                resolve({'status': 200, 'message':'get single data', 'data': data});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

	this.update = function(id, updateData) {
		return new Promise((resolve, reject) => {
			UserSchema.update({_id: id}, updateData).then(() => {
                resolve({'status': 200, 'message':'update user'});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

	this.delete = function(id) {
		return new Promise((resolve, reject) => {
			UserSchema.remove({_id: id}).then(() => {
                resolve({'status': 200, 'message':'delete user'});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}


	//delete all specimen details
	this.deleteAllSpecimen = function(id) {
		return new Promise((resolve, reject) => {
			UserSchema2.remove().then(() => {
                resolve({'status': 200, 'message':'delete all specimen'});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

	//detele test Request
	this.deleteTestReq = function(id) {
		return new Promise((resolve, reject) => {
			testReqSchema.remove({_id: id}).then(() => {
								resolve({'status': 200, 'message':'delete user'});
			}).catch(err => {
								reject({'status': 404, 'message':'err:-'+err});
						})
		})
	}

	//delete sample detail
	this.deleteSampleDetail = function(id) {
		return new Promise((resolve, reject) => {
			UserSchema2.remove({_id: id}).then(() => {
								resolve({'status': 200, 'message':'delete sample detail'});
			}).catch(err => {
								reject({'status': 404, 'message':'err:-'+err});
						})
		})
	}
}

module.exports = new UserController();
