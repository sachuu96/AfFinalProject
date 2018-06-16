var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    typeName: {
        type: String,
        require: true

    }
});

const SampleCenterSchema = new Schema({
   typeName: {
       type: String,
       require: true
   },
    centerName: {
       type: String,
        require: true
    },
    incharge: {
       type: String,
        require: true
    },
    locn: {
       type: String,
        require: true
    },
    emailaddress: {
       type: String,
        require: true
    },
    cont1: {
       type: String,
        require: true
    },
    cont2: {
       type: String,
        require: false
    }

});

const TestNameSchema = new Schema({
        labName: {
            type: String,
            require: true
        },

        catName: {
            type: String,
            require: true
        },

        subcatName: {
            type: String,
            require: true
        },

        testName: {
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
    testSubCat:{
        type:String,
        require:true
    },
    testCat:{
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
    },
    testName:{
        type:String,
        require:false
    },
    result:{
        type:String,
        require:false
    },
    age:{
        type:Number,
        require:true
    }
});

const TestSchema = new Schema({

    testname:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    subcategory:{
        type:String,
        require:true
    }

});

const DepartmentSchema = new Schema({
    department_name:{
        type:String,
        required:true
    }
});

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const LabtypeSchema = new Schema({
    lab_type_name:{
        type:String,
        required:true
    }
});

const LaboratorySchema = new Schema({
    lab_name:{
        type:String,
        required:true
    },
    lab_type:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    },
    incharge:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact_1:{
        type:String,
    },
    contact_2:{
        type:String,
    }
});

// const TestSchema = new Schema({
//
//     testname:{
//         type:String,
//         require:true
//     },
//     category:{
//         type:String,
//         require:true
//     },
//     subcategory:{
//         type:String,
//         require:true
//     }
//
// });

const CategorySchema = new Schema({

    categoryName:{
        type:String,
        require:true
    },
    subcategoryName:{
        type:String,
        require:true
    },
    specimen_Type:{
        type:String,
        require:true
    },
    specimen_Retention_Type:{
        type:String,
        require:true
    },
    duration:{
        type:String,
        require:true
    }
});

const SubCategorySchema = new Schema({

    subcategoryName:{
        type:String,
        require:true
    },
    categoryName:[{
        type:String,
        require:false
    }]
});

mongoose.model('SampleCenter', SampleCenterSchema);
mongoose.model('CenterTypes', TypeSchema);
mongoose.model('TestName', TestNameSchema);
mongoose.model('Specimen',UserSchema2);
mongoose.model('TestRequest',testReqSchema);
mongoose.model('Patient',patientSchema);
mongoose.model('Test',TestSchema);
mongoose.model('lab_type',LabtypeSchema);
mongoose.model('department',DepartmentSchema);
mongoose.model('laboratories',LaboratorySchema);
mongoose.model('user',UserSchema);
//mongoose.model('Test',TestSchema);
mongoose.model('Category',CategorySchema);
mongoose.model('SubCategory',SubCategorySchema);

mongoose.connect('mongodb://127.0.0.1:27017/final_AF', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("DB connected");
});

module.exports = mongoose;
