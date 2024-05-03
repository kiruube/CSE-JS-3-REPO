const {Schema,model} = require("mongoose");

const CourseSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    dateOfRegistration:{
        type: Date,
        default: Date.now,
        required: true
    },
    lead:{
        type: String,
        required: true,
    },
    category:{
        type: Enum,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    isActive:{
        type:Boolean,
        required: true,
    }
})



const Course = model('course', CourseSchema);
