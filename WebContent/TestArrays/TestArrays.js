/**
 * Set the courses enrolled by student in an array and display to the user when the user clicks a button
 */
//Student object holding profile information like ID, name and the courses in which student has enrolled
var varshaK = {
		//Property to hold the student ID
		studentID : "010827778",
		//Property to hold student name
		studentName : "Varsha",
		//Property to hold array containing courses 
		courses 	: ['202','272','273']
};

//Displays student information like ID and name on the HTML page 
function displayStudentInfo() {
	var studentInfo = "Student Information :<br>ID : "
			+ varshaK.studentID + "<br>Name : " + varshaK.studentName;
	//Get the element where the information is to be displayed and update its contents with that of 'studentInfo'
	document.getElementById('student_data').innerHTML = studentInfo;
}

//Displays courses enrolled in by the student. The courses are stored in an array.
function displayCourses(){
	//Get the no. of courses by using the array length
	var noOfCourses = varshaK.courses.length;
	var courseMsg = "<b>Courses :</b>";
	courseMsg += "<ul>";
	//Iterate the array to create the HTML unordered list of all the courses in it.
	for (i=0;i < noOfCourses; i++){
		
		courseMsg += "<li>" + varshaK.courses[i] +"</li>";
	}
	//Display the courses in the HTML tag destined for the courses.
	document.getElementById('student_courses').innerHTML =  courseMsg;
	return false;
}

