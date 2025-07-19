var mongoose = require('mongoose');
var userschema = new mongoose.Schema({
    p_name:{
        type:String,
        required:true,
        unique:true
    },
    u_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});
module.exports = mongoose.model("product",userschema)