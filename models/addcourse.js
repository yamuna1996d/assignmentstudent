var mongoose = require('mongoose');
const coursSchema=new mongoose.Schema({
    Studentid:String,
    Coursename:String,
    fee:Number,
    Institute:String,
    Duration:Number
});
const cousemodel=mongoose.model('courses',coursSchema);
module.exports= {cousemodel}