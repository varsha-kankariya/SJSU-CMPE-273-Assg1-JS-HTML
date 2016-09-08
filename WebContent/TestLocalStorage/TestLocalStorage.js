//Variable that stores  the student Id
var studentId;

/**
 * Retrieves student ID and his/her food choice from the HTML page and gives
 * student the option of saving the choice in case he/she wants to view his/her
 * earlier feedback.If the user chooses to save the feedback then it stored in
 * the browser local storage with the student ID as the key.
 */
function retieveAndStoreFoodChoice() {
	// retrieve the student ID
	studentId = document.getElementById('studentID').value;
	// Retrieve the food choice of the student
	var foodChoiceEle = document.getElementById('food_choice');
	var foodChoice = foodChoiceEle.options[foodChoiceEle.selectedIndex].text;
	// Ask the user if he/she wants to save the choice
	var response = confirm('Do you want to save the choice?');
	// If the user wants to save the choice
	if (response == true) {
		// Check if the browser supports 'localStorage'
		if (typeof (Storage) !== "undefined") {
			// Save the food choice with the student ID as the key
			localStorage.setItem(studentId, foodChoice);
			// Set the boolean value to true indicating the choice was set
			// previously
			localStorage.setItem(studentId + "_isChoiceSet", "true");
		} else {
			alert("Sorry!Couldn't store your food choice due to technical issues!");
		}
	} else {
		alert("Thank You for your feedback!!!");
	}
}

/**
 * Displays the student food choice if it was previously submitted by the
 * student
 * 
 * @returns
 */
function displayPreviousFoodChoice() {
	// Retrieve the student Id whose previous choice is to be displayed
	studentId = document.getElementById('studentID').value;
	// If the ID is not enetered, ask the user to enter the ID and try again
	if (studentId == null) {
		alert("Please enter your student ID and try again!!!!");
	} else {
		// Check if the browser supports localStorage
		if (typeof (Storage) !== "undefined") {
			// Form the key with the studentId
			var booleanKey = studentId + "_isChoiceSet";
			var isPreviousChoiceSet = new Boolean(localStorage
					.getItem(booleanKey));
			// Check if the student had submitted any food choice previously
			// If not---> ask to submit a choice
			if (isPreviousChoiceSet == null || isPreviousChoiceSet == false) {
				alert("Please set your choice to view!!")
			}
			// Display the previously set food choice
			else {

				var prevFoodChoice = localStorage.getItem(studentId);
				alert("Previous Food Choice : " + prevFoodChoice);
			}
		}
		// Display message if browser does not support 'localStorage'
		else {
			alert("Sorry!Your choice was not saved due to browser incompatibility!!");
		}
	}
}