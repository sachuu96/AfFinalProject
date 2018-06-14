const mongoose 	= require('mongoose');
const Schema 	= mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
        require: true
	}
});

const UserSchema2 = new Schema({
	reqId:{
		type:String,
		require:true
	},
  testType:{
    type:String,
    require:true
  },
  retentionType:{
    type:String,
    require:true
  },
  collectedDate:{
    type:String,
    require:true
  },
  remarks:{
    type:String,
    require:true
  },
  location:{
    type:String,
    require:true
  },
  storedORdestroyed:{
    type:String,
    require:true
  },
  sORdDate:{
    type:String,
    require:true
  }
});

const testReqSchema = new Schema({
action:{
		type:String,
		require:null
},
priority:{
	type:String,
	require:true
},
status:{
	type:String,
	require:true
},
id:{
	type:String,
	require:true
},
HIN:{
	type:String,
	require:true
},
testName:{
	type:String,
	require:true
},
rDate:{
	type:String,
	require:true
},
dDate:{
	type:String,
	require:true
},
reqPerson:{
	type:String,
	require:true
},
comments:{
	type:String,
	require:true
}
});

const patientSchema = new Schema({
	HIN:{
		type:String,
		require:true
	},
	name:{
		type:String,
		require:true
	},
	dob:{
		type:String,
		require:true
	},
	gender:{
		type:String,
		require:true
	}
});

mongoose.model('User', UserSchema);
mongoose.model('Specimen',UserSchema2);
mongoose.model('TestRequest',testReqSchema);
mongoose.model('Patient',patientSchema);

mongoose.connect('mongodb://localhost:27017/laboratory', (err) => {
	if (err) {
		console.log(err);
		process.exit(-1);
	}
	console.log('Connected to the DB');
});

module.exports = mongoose;
