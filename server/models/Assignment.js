// Initialize Mongoose
let mongoose = require('mongoose');

let assignmentSchema = mongoose.Schema({ // Create a schema for the model
    AssignmentName: String,
    Course: String,
    DueDate: Date,
    Notes: String
},
{
    collection: "Assignments" 
});

module.exports = mongoose.model('Assignment', assignmentSchema); // Export the model using the schema
