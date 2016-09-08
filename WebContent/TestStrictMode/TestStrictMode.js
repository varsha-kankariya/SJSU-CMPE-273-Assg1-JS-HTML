/**
 * Tests if strict mode is activated for variables declared without 'var'
 * keyword
 */

function testStrictModeForVariable() {
	"use strict";
	try {
		// Variable declared without the 'var' keyword
		temp = "trial_variable";
	} catch (err) {
		alert("Voilation:Variable to be declared with 'var'!!!");
	}

}

/**
 * Tests if strict mode is activated for mistyped variable names
 */
function testForMistypedVar() {
	"use strict";
	try {
		var temp = "trial_variable";
		// Mistyped variable name
		tmp = "abc";
	} catch (err) {
		alert("Voilation:Duplicate variable been declared!!");
	}

}
