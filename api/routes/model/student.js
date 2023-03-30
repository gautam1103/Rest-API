const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    regno:Number,
    college:String,
    stream:String

})
module.exports=mongoose.model('Student',studentSchema);