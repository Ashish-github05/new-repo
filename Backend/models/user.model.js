const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true, 
            minlength:[3, 'firstname should be 3 characyer long'],
        },
        lastname:{
            type:String,
            minlength:[3, 'lastname should be 3 characyer long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique: true,
        minlength:[3, 'lastname should be 3 characyer long'],
    },
    
})
