/**
 * The javascript code contains functions that will be invoked to modify the
 * student Id and name when the buttons from HTML are clicked
 */

/**
 * STudent object that contains ID and name properties
 */
var varshaK = {
	// Property to hold the student ID
	studentID : "010827778",
	// Property to hold student name
	studentName : "Varsha",
};

/**
 * Modifies the student ID.It will be invoked on the 'onclick' event of button.
 * 
 * @returns
 */
function modifyStudentId() {

	// Modify the student ID
	varshaK.studentID = '111111111';
	// Alert the user that the ID has been modified
	alert("Modiefied Student ID : " + varshaK.studentID);
	// Display updated student details on HTML page
	displayStudentInfo();
	return false;
}

/**
 * Modifies the student name.It will be invoked on the 'onclick' event of
 * button.
 * 
 * @returns
 */
function modifyStudentName() {
	// Modify the student name
	varshaK.studentName = "Amy";
	// Alert the user that the name has been modified
	alert("Modiefied Student Name : " + varshaK.studentName);
	// Display updated student details on HTML page
	displayStudentInfo();
	return false;
}

/**
 * Displays the student ID and name.Displays the information in tag with ID
 * 'student_data'
 * 
 * @returns
 */
function displayStudentInfo() {
	var studentInfo = "Student Information :<br>ID : " + varshaK.studentID
			+ "<br>Name : " + varshaK.studentName;
	// Get the element where the information is to be displayed and update its
	// contents with that of 'studentInfo'
	document.getElementById('student_data').innerHTML = studentInfo;

}