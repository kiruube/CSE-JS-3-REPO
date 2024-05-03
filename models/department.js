// 1. Import requirements i.e. Schema & Model
const {Schema, model} = require('mongoose');


// 2. Create a Schema for a given Object, i.e. 
    // Define fields for a specific object, each field with its corresponding meta data
const DepartmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false

    },
    dateOfRegistration: {
        type: String,
        required: true
    },
    headOfDepartment: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        deflaut: "Macro",
        enum: ["Macro", "Micro"]
    },
    size: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});


// 3. Create a model for the object.
// Specify the Model name and its Schema
const Department = model('department', DepartmentSchema);

// 4. Export the Model
module.exports = Department;