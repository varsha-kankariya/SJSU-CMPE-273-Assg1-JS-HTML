/**
 * Demonstrates the use of javascript conditions along with the javascript loops
 * to check the student's scores and accordingly allocate the grades
 */

// Student object holding profile information like ID, name and the courses in
// which student has enrolled
var varshaK = {
	// Property to hold the student ID
	studentID : "010827778",
	// Property to hold student name
	studentName : "Varsha",
	// Property to hold array containing courses
	courses : [ '202', '272', '273' ],
	// Property to hold scores earned by student
	scores : [ 91, 89, 99 ],
	// Property to hold grades for the corresponding scores
	grades : []
};

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

/**
 * Calculate the grades for the student based on the scores secured in each
 * course. The grades are stored in 'grades' property of 'varshaK'.
 * 
 */
function calculateGrades() {

	for (i = 0; i < varshaK.scores.length; i++) {

		//if the score is between 95 and 100, grade is A
		if (varshaK.scores[i] >= 95 && varshaK.scores[i] <= 100) {
			varshaK.grades[i] = 'A';

		}
		//if the score is between 90 and 94, grade is B
		else if (varshaK.scores[i] >= 94 && varshaK.scores[i] <= 90) {
			varshaK.grades[i] = 'B';

		}
		//if the score is less than 90, grade is C
		else {

			varshaK.grades[i] = 'C';

		}
	}

}

function displayGrades() {

	calculateGrades();
	var displayScoresGrades = "<b>Course&emsp;Scores&emsp;Grades </b><br>";
	for (i = 0; i < varshaK.courses.length; i++) {

		displayScoresGrades += varshaK.courses[i] + "&emsp;&emsp;&emsp;"
				+ varshaK.scores[i] + "&emsp;&emsp;&emsp;" + varshaK.grades[i]
				+ "<br><br>";
	}

	document.getElementById('display_grades').innerHTML = displayScoresGrades;

}