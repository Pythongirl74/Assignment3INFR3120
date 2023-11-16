var express = require('express');
var router = express.Router();
var Assignment = require('../models/Assignment'); // Update the model import

module.exports.DisplayAssignmentList = async (req, res, next) => {
    try {
        const AssignmentList = await Assignment.find();
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList 

        });

    } catch (err) {
        console.error(err);
        res.render('assignment/list', {
            error: 'Error on server'
        });
    }
};

module.exports.AddAssignment = async (req, res, next) => {
    try {
        const AssignmentList = await Assignment.find();
        res.render('assignment/add', {
            title: 'Add Assignment'
        });
    } catch (err) {
        console.error(err);
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList,
            error: 'Error on the server'
        });
    }
};

/*module.exports.ProcessAssignment = async (req, res, next) => {
    try {
        let newAssignment = new Assignment({
            "AssignmentName": req.body.AssignmentName,
            "Course": req.body.Course,
            "DueDate": req.body.DueDate,
            "Notes": req.body.Notes,
            "Completed": req.body.Completed
        });
        await newAssignment.save();
        res.redirect('/assignments'); // Update the redirection URL
    } catch (error) {
        console.error(error);
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList,
            error: 'Error on the server'
        });
    }
};*/
module.exports.ProcessAssignment = async (req, res, next) => {
    try {
        // Your code to create a new assignment...
        let newAssignment = new Assignment({
            "AssignmentName": req.body.AssignmentName,
            "Course": req.body.Course,
            "DueDate": req.body.DueDate,
            "Notes": req.body.Notes,
        });
        await newAssignment.save();

        res.redirect('/assignments');        // Fetch the updated AssignmentList after saving the new assignment
        const AssignmentList = await Assignment.find();

        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList,
            error: null // Clear any previous error
        });
    } catch (error) {
        console.error(error);
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: [], // Or handle AssignmentList as needed
            error: 'Error on the server'
        });
    }
};


module.exports.EditAssignment = async (req, res, next) => {
    try {
        const AssignmentList = await Assignment.find();
        const id = req.params.id;
        const assignmentToEdit = await Assignment.findById(id);
        res.render('assignment/edit', {
            title: 'Edit Assignment',
            Assignment: assignmentToEdit
        });
    } catch (error) {
        console.error(error);
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList,
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessEditAssignment = async (req, res, next) => {
    try {
        const AssignmentList = await Assignment.find();
        const id = req.params.id;
        let updatedAssignment = {
            "AssignmentName": req.body.AssignmentName,
            "Course": req.body.Course,
            "DueDate": req.body.DueDate,
            "Notes": req.body.Notes,
        };
        await Assignment.findByIdAndUpdate(id, updatedAssignment);
        res.redirect('/assignments'); // Update the redirection URL
    } catch (error) {
        console.error(error);
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList,
            error: 'Error on the server'
        });
    }
};

module.exports.DeleteAssignment = async (req, res, next) => {
    try {
        const AssignmentList = await Assignment.find();
        let id = req.params.id;
        await Assignment.deleteOne({ _id: id });
        res.redirect('/assignments'); // Update the redirection URL
    } catch (error) {
        console.error(error);
        res.render('assignment/list', {
            title: 'Assignment List',
            AssignmentList: AssignmentList,
            error: 'Error on the server'
        });
    }
};

