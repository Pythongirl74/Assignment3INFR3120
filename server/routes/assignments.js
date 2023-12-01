var express = require('express');
var router = express.Router();
let userModel = require('../models/user');
let AssignmentController = require('../controllers/assignments'); // Update the controller for assignments
let mongoose = require('mongoose'); 

// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
/* Get route for the Assignment List */
// Read Operation
router.get('/', AssignmentController.DisplayAssignmentList);
/* Get route for Add Assignment page --> Create */
router.get('/add', requireAuth, AssignmentController.AddAssignment);
/* Post route for Add Assignment page --> Create */
router.post('/add', requireAuth, AssignmentController.ProcessAssignment);
/* Get route for displaying the Edit Assignment page --> Update */
router.get('/edit/:id', requireAuth, AssignmentController.EditAssignment);
/* Post route for processing the Edit Assignment page --> Update */
router.post('/edit/:id', requireAuth, AssignmentController.ProcessEditAssignment);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', requireAuth, AssignmentController.DeleteAssignment);

module.exports = router;
