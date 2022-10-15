const mongoose = require('mongoose');
const Champion = mongoose.Schema({
    Nombres:{
        type:String,
        required:true
    },
    Apellidos:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contraseña:{
        type:String,
        required:true
    }
})