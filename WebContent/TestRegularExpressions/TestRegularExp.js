/**
 * Summarizes the given piece of information using regular expressions and
 * String's 'replace' method
 */

// Original piece of text that is to be summarized
var orignalInfo = "Varsha is talented.Varsha is courageous.Varsha is determined.Varsha never gives up";

/**
 * Method to summarize the given piece of information and display it in a list
 * form
 * 
 * @returns
 */
function organizeSummary() {

	// pattern to be searched in the 'orignalInfo' string i.e. one or more
	// occurrences followed by string 'Varsha is'
	var pattern = /\.?Varsha (is)?/gi;
	// Replace it with the HTML tags to display them in an unordered list
	var replacementStr = "</li><li>";
	// 'summaryStr' contains the summarized string
	var summaryStr = "<b>Summary about Varsha :</b><br><ul>"
	summaryStr += orignalInfo.replace(pattern, replacementStr);
	summaryStr += "</li></ul>";
	// Display the summarized string on HTML page
	document.getElementById('summary').innerHTML = summaryStr;

}

/**
 * Function to display the original text 'orignalInfo'
 * 
 * @returns
 */
function displayOrignalInfo() {
	document.getElementById('org_info').innerHTML = "<b>Orignal Text :</b> <br>"
			+ orignalInfo;
}