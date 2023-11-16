var express = require('express');
var router = express.Router();
var AssignmentController = require('../controllers/assignments'); // Update the controller for assignments

/* Get route for the Assignment List */
// Read Operation
router.get('/', AssignmentController.DisplayAssignmentList);
/* Get route for Add Assignment page --> Create */
router.get('/add', AssignmentController.AddAssignment);
/* Post route for Add Assignment page --> Create */
router.post('/add', AssignmentController.ProcessAssignment);
/* Get route for displaying the Edit Assignment page --> Update */
router.get('/edit/:id', AssignmentController.EditAssignment);
/* Post route for processing the Edit Assignment page --> Update */
router.post('/edit/:id', AssignmentController.ProcessEditAssignment);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', AssignmentController.DeleteAssignment);

module.exports = router;
