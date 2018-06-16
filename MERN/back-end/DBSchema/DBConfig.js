const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
})

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

mongoose.model('lab_type',LabtypeSchema);
mongoose.model('department',DepartmentSchema);
mongoose.model('laboratories',LaboratorySchema);
mongoose.model('user',UserSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Laboratory',function(err){
    if(err){
        console.log('Mongo Error : '+err);
        process.exit(-1);
    }
    console.log('MongoDB Connected Successfully!');
});

module.exports = mongoose;