const mongoose=require('mongoose');
const studSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    place:{
         type:String,
         require:true
    }
})
module.exports=mongoose.model('Student',studSchema);    