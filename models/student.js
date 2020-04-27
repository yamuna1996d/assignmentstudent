var mongoose = require('mongoose');
const studSchema=new mongoose.Schema({
    Name:String,
    email:String,
    place:String,
    phone:Number,
    parentname:String,
    parentPhone:Number
});
const studmodel=mongoose.model('studentss',studSchema);
module.exports= {studmodel}