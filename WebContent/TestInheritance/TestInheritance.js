/**
 * Code to explain the concept of inheritance in javascript. It is simple than
 * classical inheritance as there are only 2 objects in play : one is the
 * prototype object 'Person' and other is the object that inherits from
 * it('student' and 'faculty')
 */
// The protoype that represents the common properties shared by students and
// faculty objects
function Person(personId, name, dept) {
	this.personId = personId;
	this.name = name;
	this.dept = dept;

}

// --------------------------STUDENT-------------------------------------

// Create a student object from 'Person' prototype by passing student specific
// vales to 'Person' object constructor
var student = new Person('1111', "Varsha", "MSSE");
// Add student specific property to 'student' object
student.courseEnrolled = "272 ";
// Add function to display student specific information on HTML page
student.displayInfo = function() {

	document.getElementById('person_info').innerHTML = "";
	var infoString = "Student Info <br> <br> Id : " + student.personId
			+ "<br>Name : " + student.name + "<br>Dept : " + student.dept
			+ "<br> Courses : " + student.courseEnrolled;
	document.getElementById('person_info').innerHTML = infoString;
};

// --------------------------FACULTY-------------------------------------

// Create a faculty object from 'Person' prototype by passing faculty specific
// vales to 'Person' object constructor
var faculty = new Person('T111', "Prof. Shim", "MSSE");
// Add faculty specific property to 'faculty' object
faculty.coursesTaught = "273";

// Add function to display faculty specific information on HTML page

faculty.displayInfo = function() {

	document.getElementById('person_info').innerHTML = "";
	var infoString = "Faculty Info <br> <br> Id : " + faculty.personId
			+ "<br>Name : " + faculty.name + "<br>Dept : " + faculty.dept
			+ "<br> Courses : " + faculty.coursesTaught;
	document.getElementById('person_info').innerHTML = infoString;
};