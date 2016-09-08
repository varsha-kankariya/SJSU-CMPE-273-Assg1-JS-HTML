//Object to store the student information
var studentInfo = new Object();

// Retrieves the form values and saves into the 'studentInfo' object
function saveStudentInfo() {

	
	alert("Reached");
	// Get the form element which contains all the data
	var studentForm = document.getElementById('studentForm');

	// Save the data into the 'studentInfo' object
	studentInfo.firstName = studentForm.elements["firstName"].value;
	alert(firstName);
	studentInfo.lastName = studentForm.elements["lastName"].value;
	studentInfo.emailId = studentForm.elements["emailId"].value;
	studentInfo.contactNo = studentForm.elements["contactNo"].value;
	studentInfo.addr1 = studentForm.elements["addr1"].value;
	studentInfo.city = studentForm.elements["city"].value;
	studentInfo.state = studentForm.elements["state"].value;
	studentInfo.country = studentForm.elements["country"].value;
	studentInfo.zipCode = studentForm.elements["zipCode"].value;

	// Create a JSON string of the object
	var strObject = JSON.stringify(studentInfo);
	// Save the data into the localStorage of the browser
	localStorage.setItem(studentInfo.firstName, strObject);

	document.getElementById('display_msg').style.display = "block";

}