const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lead: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

// 3. Create a model for the object.
// Specify the Model name and its Schema
const Course = model("course", CourseSchema);

// 4. Export the Model
module.exports = Course;
