// 1. Import requirements i.e. Schema & Model
const {Schema, model} = require('mongoose');


// 2. Create a Schema for a given Object, i.e. 
    // Define fields for a specific object, each field with its corresponding meta data
const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    course: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true,
        default: "Male",
        enum: ["Male", "Female"]

    },
    isVaccinated: {
        type: Boolean,
        required: false

    }
});


// 3. Create a model for the object.
// Specify the Model name and its Schema
const Student = model('student', StudentSchema);

// 4. Export the Model
module.exports = Student;