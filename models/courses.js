const mongoose = require('mongoose')
//Course Schema 
const courseSchema = mongoose.Schema({
    userId:{
        type:String
    },
    name : {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    videoId:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Course",courseSchema);