// 1. Import requirements i.e. Schema & Model
const {Schema, model} = require('mongoose');


// 2. Create a Schema for a given Object, i.e. 
    // Define fields for a specific object, each field with its corresponding meta data
const PartnerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateOfRegistration: {
        type: Date,
        default: Date.now,
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
    category: {
        type: String,
        required: true,
        default: "Industrial Partner",
        enum: ["Industrial Partner", "Project Partner", "Funding Partner"]

    },
    isActive: {
        type: Boolean,
        required: false

    }
});


// 3. Create a model for the object.
// Specify the Model name and its Schema
const Partner = model('partner', PartnerSchema);

// 4. Export the Model
module.exports = Partner;