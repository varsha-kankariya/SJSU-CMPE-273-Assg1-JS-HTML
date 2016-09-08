/**
 * Function to get user input of studentId and student name. Then check if the
 * Id is in the correct format. If Id is not in the correct format ask user to
 * enter the information again else create a record and show the the time when
 * the record was created.
 */

function createRecord() {

	//Get the student Id
	var studentId = document.getElementById('studentId').value;

	//Get the student name
	var studentName = document.getElementById('studentName').value;

	try {
		//Check if the student Id is a valid number
		var studentIdAsInteger = new Number(studentId);
		//If the format is incorrect, throw error and ask user to enter correct information

		if (isNaN(studentIdAsInteger)) {
			throw "Invalid Id format";
		}
		//else create a student record
		else {

			var student = {

				studentId : studentIdAsInteger,
				studentName : studentName
			}
			//Display the time when the record was created.
			document.write("Record Created<br>" + "Creation Time : "
					+ String(Date()));
		}
	} catch (err) {
		document.getElementById('message').innerHTML = err;
	} finally {
		return false;
	}
}
