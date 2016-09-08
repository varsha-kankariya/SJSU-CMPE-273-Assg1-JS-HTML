/**
 * Script to get the user input into variables and display them back on the same page
 */

function displayUserInput() {

		//Get student ID 
		var studentId = document.getElementById('studentId').value;
		//Get student name 
		var studentName = document.getElementById('studentName').value;
		//Create the message string to be displayed
		var userInfo = "User Input is :<br> Student ID : " + studentId
				+ "<br>Student Name :" + studentName;
		//Get the 'display_message' HTML element and add the message to the element
		document.getElementById('display_message').innerHTML = "WOW";
		//Return 'false' so that form is not resubmitted
		return false;
	}