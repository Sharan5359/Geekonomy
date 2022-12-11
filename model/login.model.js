const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({

    name : {
        type :String,
        required : true 
    },
    mobile : {
        type : Number,
        required :true
    },
    address : {
        type : String, 
        required : true
    },
    email : {
        type : String, 
        required : true
    },
    created_at :{
        type : Date,
        immutable :true,
        default : ()=>{
          return Date.now()
        }
      },
      updated_at :{
        type :Date,
        default : ()=>{
          return Date.now()
        }
      }    
    
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Login', loginSchema)