/**
 * Parses the JSON string into javascript objects
 */

function getObjectsFromJSON() {

	var jsonStr = '{"students" : ['+
		'{"ID" : "111","name" : "Varsha"},'+
		'{"ID" : "222","name" : "Ashley"}'+
		']}';

	var studentData = JSON.parse(jsonStr);
	displayStudentData(studentData.students);
	return fasle;
}

//Displays the objects retieved from JSON string onto HTML page
function displayStudentData(studentsInfo){
	
	var displayStr = "Student Information retrieved from JSON<br><ul>";
	for (i=0;i<studentsInfo.length;i++){
		displayStr+= "<li>ID : "+ studentsInfo[i].ID +"&emsp; Name : "+ studentsInfo[i].name +"</li>";
 	}
	displayStr+="</ul>";
	document.getElementById('student_data').innerHTML = displayStr;
	
}
