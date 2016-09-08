/**
 * Code to be triggered on the text field events 'onmouseover' and 'onmouseout'
 */

// Method is invoked on the 'onmouseover' event of the text field
function displayText() {
	// Text message to be displayed when the mouse hovers on the text field
	var textMsg = "Enter your name!"
	// Set the message in the text field
	document.getElementById('text_area').value = textMsg;
	// Change the text style to 'italics'
	document.getElementById('text_area').style.fontStyle = "italic"
	return false;
}

// Method is invoked on the 'onmouseout' event of the text field
function removeText() {
	// Set an empty string in the text field when the mouse is not hovering over
	// the text field
	document.getElementById('text_area').value = "";
	return false;
}