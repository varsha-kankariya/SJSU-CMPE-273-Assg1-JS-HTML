/**
 * Create a new object with the values defined for its properties and display
 * the object contents on the HTML page. The properties can also be modified by
 * the object functions.
 */

// varshaK is a object that hold the properties that describe the student and
// functions that operate on the properties
var varshaK = {
	// Property to hold the student ID
	studentID : "010827778",
	// Property to hold student name
	studentName : "Varsha",
	// Property to hold the function that displays student ID
	displayId : function() {
		alert('Student ID : ' + this.studentID);
	},
	// Property to hold the function that displays student name
	displayName : function() {
		alert('Student Name : ' + this.studentName);
	}
};
