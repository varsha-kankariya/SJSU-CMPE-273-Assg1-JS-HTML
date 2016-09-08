/**
 * 
 */

// varshaK is a object that hold the properties that describe the student
var varshaK = {
	// Property to hold the student ID
	studentID : "010827778",
	// Property to hold student name
	studentName : "Varsha"
};

/**
 * Retrieves the user input for student Id and checks its value for different conditions
 * Error is thrown if user input is empty or not same as the actual ID or in other conditions like some 
 * other characters than those allowed.
 * @returns
 */
function checkStudentId() {

	var userInput = document.getElementById('studentId').value;
	var actualStudentId = varshaK.studentID;
	try {
		if (userInput == '') {
			throw "empty";

		} else if (userInput != actualStudentId) {
			throw "incorrect";
		} else if (userInput == actualStudentId) {
			alert("You have entered correct Id!!!!");
		} else {
			throw "invalid";
		}
	} catch (err) {
		alert("Student ID is " + err);
	} finally {
		document.getElementById('message').innerHTML = "Thank You for using our portal!!!";
	}
}
