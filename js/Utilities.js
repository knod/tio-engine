/* Created 03/01/15 */

'use strict'

var Util = {
/*
An object that contains various utilities that many objects will need.
Its properties are accessible to everyone.
*/
};


	// // ==============
	// // MATH
	// // ==============
	// Util.getRandomInt = function () {
	// /*


	// */


	// };  // End Util.getRandomInt()

	// Util.getRandomIntInRange = function () {
	// /*


	// */

	// };  // End Util.getRandomIntInRange()


	// Util.mapValToRange = function () {
	// /*


	// */

	// };  // End Util.mapValToRange()


	// Util.getWithinLimits = function ( value, max, min ) {
	// /* ( num, num, num ) -> num

	// Returns a number value that is no less than min and no more
	// than max
	// */

	// 	var minLimit = Math.max( min, value );
	// 	var maxLimit = Math.min( max, minLimit );

	// 	return maxLimit;
	// };  // End Util.getWithinLimits()


	// // =============
	// // ELEMENT COMPARISON
	// // =============
	// Util.hasSomeOverlap = function () {
	// /*


	// */


	// };  // End Util.hasSomeOverlap()

	// Util.isCompletelyInside = function ( innerElem, outerElem ) {
	// /*

	// ??: What use is this?
	// */


	// };  // End Util.isCompletelyInside()

	// Util.doesOverlap = function ( elem1, elem2 ) {
	// /* ( DOM, DOM ) -> bool

	// Returns whether or not elem1 overlaps elem2 at all
	// Remeber, top left corner is 0, 0

	// ??: Is it necessary to check for both hasSomeOverlap
	// and isCompletelyInside? Will hasSomeOverlap do on its own?
	// */
	// 	var rect1 = elem1.getBoundingClientRect();
	// 	var rect2 = elem2.getBoundingClientRect();

	// 	// Wish I had a visualization for this logic
	// 	var isOverlapping = !(
	// 		rect1.right 	< rect2.left 	|| 
	// 		rect1.left 		> rect2.right 	|| 
	// 		rect1.bottom 	< rect2.top 	|| 
	// 		rect1.top 		> rect2.bottom
	//     );

	// 	return isOverlapping;
	// };  // End Util.doesOverlap()


	// Util.whichEdgeAtSpeed = function ( innerElem, outerElem, speedVectorsPx ) {
	// /* ( DOM, DOM, {} ) -> {}

	// WARNING: Speed values must be given in pixels

	// speedVectorsPx example: { x: -2, y: 0 }

	// Returns which edges of outerElem will be overtaken given the
	// current x and y speeds (given in pixels) of the innerElem

	// ??: Useful? Can determine whether scene object will escape its
	// field on its next move, and such things.
	// ??: What units should speed be given in? px? %? rem?
	// ??: Allow str to be passed in to identify the units of the speed?
	// ??: Allow speed to be passed in as str with units, then behave accordingly?
	// */
	// 	var edgesHit = { x: "none", y: "none" };

	// 	var bufferX 	= speedVectorsPx.x / 2;
	// 	var bufferY 	= speedVectorsPx.y / 2;

	// 	var innerRect 	= innerElem.getBoundingClientRect();
	// 	var outerRect 	= outerElem.getBoundingClientRect();

	// 	var futureLeft 	= innerRect.left 	+ bufferX,
	// 		futureRight = innerRect.right 	+ bufferX,
	// 		futureTop	= innerRect.top 	+ bufferY,
	// 		futureBottom= innerRect.bottom 	+ bufferY
	// 	;  // end vars

	// 	// Wish I had a visualization for this logic (past me: what did you mean?)
	// 	if 		( futureLeft  < outerRect.left  ) { edgesHit.x = "left";  }
	// 	else if ( futureRight > outerRect.right ) { edgesHit.x = "right"; }

	// 	if 		( futureTop 	< outerRect.top 	) { edgesHit.y = "top";    }
	// 	else if ( futureBottom 	>  outerRect.bottom ) { edgesHit.y = "bottom"; }

	// 	return edgesHit;
	// };  // End Util.whichEdgeAtSpeed()


Util.whichEdgeAtSpeedX = function ( innerElem, outerElem, xSpeed ) {
/* ( DOM, DOM, num ) -> str

WARNING: Speed values must be given in pixels
Returns which edge, left, right, or none, of outerElem will be overtaken
given the current x speed (given in pixels) of the innerElem

??: Allow speed to be passed in as str with units, then behave accordingly?
*/
	var edgeHit = none;

	var bufferX 	= xSpeed / 2;

	var innerRect 	= innerElem.getBoundingClientRect();
	var outerRect 	= outerElem.getBoundingClientRect();

	var futureLeft 	= innerRect.left 	+ bufferX,
		futureRight = innerRect.right 	+ bufferX
	;  // end vars

	// Wish I had a visualization for this logic (past me: what did you mean?)
	if 		( futureLeft  < outerRect.left  ) { edgeHit = "left";  }
	else if ( futureRight > outerRect.right ) { edgeHit = "right"; }

	return edgeHit;
};  // End Util.whichEdgeAtSpeedX()


Util.whichEdgeAtSpeedY = function ( innerElem, outerElem, ySpeed ) {
/* ( DOM, DOM, num ) -> str

WARNING: Speed values must be given in pixels
Returns which edge, top, bottom, or none, of outerElem will be overtaken
given the current y speed (given in pixels) of the innerElem

??: Allow speed to be passed in as str with units, then behave accordingly?
*/
	var edgeHit = none;

	var bufferY 	= ySpeed / 2;

	var innerRect 	= innerElem.getBoundingClientRect();
	var outerRect 	= outerElem.getBoundingClientRect();

	var futureLeft 	= innerRect.top 	+ bufferY,
		futureRight = innerRect.bottom 	+ bufferY
	;  // end vars

	// Wish I had a visualization for this logic (past me: what did you mean?)
	if 		( futureLeft  < outerRect.top  ) { edgeHit = "top";  }
	else if ( futureRight > outerRect.bottom ) { edgeHit = "bottom"; }

	return edgeHit;
};  // End Util.whichEdgeAtSpeedY()


	// Util.distanceBetweenSides = function ( elem1, side1, elem2, side2 ) {
	// /* ( DOM obj, str, DOM obj, str )

	// Checks the distance between the specified sides of the specified
	// elements
	// Positive value means side1's x or y is less than side2's x or y
	// Negative value means the opposite
	// ??: What does it do for us?
	// */

	// 	var side1px = elem1.getBoundingClientRect()[ side1 ];
	// 	var side2px	= elem2.getBoundingClientRect()[ side2 ];
	// debugger;
	// 	return (side1px - side2px);

	// };  // End Util.distanceBetweenSides()


	// Util.screenPosToOffsetPos = function ( element, screenPos ) {
	// /* ( DOM obj, {} ) -> {}

	// screenPos is in the form { x: #, y: # }

	// Converts the screenPos given to an offset position for the
	// element given.
	// */
	// 	// Figure out the current relationship between the
	// 	// element's screen position and its offset position (may not be parent element)
	// 	var elemScreenRect 	= element.getBoundingClientRect(),
	// 		elemScreenLeft 	= elemScreenRect.left,
	// 		elemScreenTop	= elemScreenRect.top;

	// 	var elemOffsetLeft 	= element.offsetLeft,
	// 		elemOffsetTop 	= element.offsetTop;

	// 	// MATH, wtf
	// 	var xDiff 			= elemScreenLeft - elemOffsetLeft,
	// 		yDiff 			= elemScreenTop - elemOffsetTop;

	// 	// Use that to convert screenPos to an offset position
	// 	var newOffset;
	// 	newOffset.x 	= screenPos.x - xDiff;
	// 	newOffset.y 	= screenPos.y - yDiff;

	// 	return newOffset;
	// };  // End Util.screenPosToOffsetPos()


	// // --- Leaving Bounds --- \\
	// Util.willLeaveAxisBounds = function ( innerElem, outerElem, minSide, maxSide, axisSpeed ) {
	// /* ( elem, elem, str, str, num ) ->

	// Given which sides to check, returns true if axisSpeed will
	// put innerElem out of bounds on next move

	// WARNING: axisSpeed must be in pixels!
	// */
	// 	var willLeave 	= false;

	// 	// Have to check both edges
	// 	// Will give negative if innerElem is poking out of the left
	// 	var elemDiffMin 	= Util.distanceBetweenSides( innerElem, minSide, outerElem, minSide  ),
	// 	// Will give negative if innerElem is poking out of the right
	// 		elemDiffMax 	= Util.distanceBetweenSides( outerElem, maxSide, innerElem, maxSide );
		
	// 	// Adds the speed so we're looking at innerElem's future position now
	// 	var totalDiffMin 	= elemDiffMin + axisSpeed,
	// 		totalDiffMax	= elemDiffMax + axisSpeed;

	// 	if ( (totalDiffMin < 0) || (totalDiffMax < 0) ) { willLeave = true; }
	// debugger;
	// 	return willLeave;

	// };  // End Util.willLeaveAxisBounds()


	// Util.willLeaveBoundsX = function ( innerElem, outerElem, xSpeed ) {
	// /* ( elem, elem, num ) ->

	// Returns true if xSpeed will put innerElem out of bounds on next move

	// WARNING: xSpeed must be in pixels!
	// */
	// 	var willLeave 	= 
	// 		Util.willLeaveAxisBounds( innerElem, outerElem, "left", "right", xSpeed );

	// 	return willLeave;

	// };  // End Util.willLeaveBoundsX()


	// Util.willLeaveBoundsY = function ( innerElem, outerElem, ySpeed ) {
	// /* ( elem, elem, num ) ->

	// Returns true if ySpeed will put innerElem out of bounds on next move

	// WARNING: ySpeed must be in pixels!
	// */
	// 	var willLeave 	= 
	// 		Util.willLeaveAxisBounds( innerElem, outerElem, "top", "bottom", ySpeed );

	// 	return willLeave;

	// };  // End Util.willLeaveBoundsY()


	// // ===============
	// // CONVERTING
	// // ===============
	// Util.percentToPx = function ( percentVal, referenceElem, property ) {
	// /* ( num, DOM obj, str ) -> num

	// WARNING: property can only be Width, Height, width, or height.

	// Returns a pixel value converted from a percentage value. Conversion is based
	// on the refernce element and the property to be converted.

	// Current use case: Converting percentage speed to pixel speed to test
	// if a scene object will escape its field

	// ??: Is this even worth it for two lines? I guess it remembers to use client property
	// TODO: Test case would save the current font size, set font size to normal, text a
	// certain percentage, then set font size back to what it was.
	// */
		
	// 	if ( property === "width" ) { property = "Width"; }
	// 	if ( property === "height" ) { property = "Height"; }

	// 	// Stop if an invalid property is being used
	// 	if ( (property !== "Width") && (property !== "Height") ) {
	// 		console.error( "As far as I know, that's not a property that can be used to properly convert percent values." );
	// 	}

	// 	var referenceProp 	= referenceElem[ "client" + property ];
	// 	var pxVal 			= referenceProp * ( percentVal / 100 );

	// 	return pxVal;
	// };  // End Util.percentToPx()


// http://stackoverflow.com/questions/5588465/javascript-parse-time-minutesseconds-from-miliseconds
Util.msToMMSSMsMs = function ( msValue ) {
/* ( int or str ) -> str

Given a string or int representing milliseconds of time, such
as Date.now(), returns a string of the type mins:secs.ms, for
example 03:04.24
*/
	// Ensure we work with an integer
	var msInt	= parseInt( msValue, 10 );
	var min 	= parseInt( msInt/1000/60 );
	var sec 	= ( msInt/1000 ) % 60;
	// Reduce the remaining milliseconds to two decimal places
	sec 		= sec.toFixed(2);  // turns it into a string?

	// Add leading zeros if they are needed
	if ( min < 10 ) { min = "0" + min; }
	if ( sec < 10 ) { sec = "0" + sec; }

	return (min + ":" + sec)
};  // End Util.mmToMMSS()


// End Util{}
