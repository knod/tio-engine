/* Created 02/05/15 */

'use strict'

var Entity = function () {
/*

Entity object from which other entities are created
*/
	var entity = this;

	entity.moveX = function ( xSpeed ) {
	/* ( num ) -> str

	If move won't put this object out of bounds, moves object
	on the x-axis at the given speed (positive or negative)

	Returns what edge was hit: left, right, or none

	WARNING: object must have a .bounderHTML property
	*/
		var self 		= this;
		var selfHTML_ 	= self.html;

		// To compare to which edge is hit
		var towardsWhichEdge = "not moving";
		if ( xSpeed < 0 ) { towardsWhichEdge = "left"; }
		else if ( xSpeed > 0 ) { towardsWhichEdge = "right"; }

		// If it will go out of bounds, don't move
		// Possible values: "none", "right", "left"
		var edgeHit = Util.whichEdgeAtSpeedX( selfHTML_, self.bounderHTML, xSpeed );

		// If the edge we're heading towards is hit, don't move, print a message
		if ( edgeHit === towardsWhichEdge ) {
			console.log( "Entity has hit its bounds going towards the " + towardsWhichEdge + " edge." );

		} else {
			// Move the correct amount in the correct direction
			var offsetLeft 	= selfHTML_.offsetLeft,
				newLeft 	= offsetLeft + xSpeed;

			selfHTML_.style.left = newLeft + "px";
		}

		return edgeHit;
	};  // End Entity.moveX()


	entity.moveY = function ( ySpeed ) {
	/* ( num ) -> str

	If move won't put this object out of bounds, moves object
	on the y-axis at the given speed (positive or negative)

	Returns what edge was hit: top, bottom, or none

	WARNING: object must have a .bounderHTML property
	*/
		var self 		= this;
		var selfHTML_ 	= self.html;

		// To compare to which edge is hit
		var towardsWhichEdge = "not moving";
		if ( xSpeed < 0 ) { towardsWhichEdge = "top"; }
		else if ( xSpeed > 0 ) { towardsWhichEdge = "bottom"; }

		// If it will go out of bounds, don't allow it to move
		var edgeHit = Util.whichEdgeAtSpeedY( selfHTML_, self.bounderHTML, ySpeed );

		// If the edge we're heading towards is hit, don't move, print a message
		if ( edgeHit === towardsWhichEdge ) {
			console.log( "Entity has hit its bounds going towards the " + towardsWhichEdge + " edge." );

		} else {
			// Move the correct amount in the correct direction
			var offsetTop 	= selfHTML_.offsetTop,
				newTop 		= offsetTop + ySpeed;

			selfHTML_.style.top = newTop + "px";
		}


		// if ( edgeHit === towardsWhichEdge ) {
		// 	// Move the element the correct amount in the correct direction
		// 	var offsetTop 	= selfHTML_.offsetTop,
		// 		newTop 		= offsetTop + ySpeed;

		// 	selfHTML_.style.top = newTop + "px";
		// }

		return edgeHit;
	};  // End Entity.moveY()


		// // entity.move = function ( boundingElem, speedVectors ) {
		// // /* ( DOM obj, {} ) -> ?

		// // Move within the boundingElem given using the x and y speedVectors given.
		// // WARNING: Velocity values must be in pixels currently!

		// // speedVectors is of the form { x: #, y: # }

		// // How to handle objects that don't have the field as their parent? I
		// // guess we won't move Mobs, we'll just move rows.
		// // */
		// // 	var self 		= this;
		// // 	var selfHTML_ 	= self.html;

		// // 	// Check if anything will go out of bounds
		// // 	var edgesHit 	= Util.exitsWhichEdgesWithSpeed( selfHTML_, boundingElem, speedVectors );

		// // 	// Pixel values of speed
		// // 	var xSpeed 		= speedVectors.x,
		// // 		ySpeed 		= speedVectors.y;

		// // 	// Move by the correct values if it won't go out of bounds
		// // 	if ( edgesHit.x === "none" ) {

		// // 		var offsetLeft 	= selfHTML_.offsetLeft,
		// // 			newLeft 	= offsetLeft + xSpeed;

		// // 		selfHTML_.style.left = newLeft + "px";

		// // 	}

		// // 	if ( edgesHit.y === "none" ) {

		// // 		var offsetTop 	= selfHTML_.offsetTop,
		// // 			newTop 		= offsetTop + ySpeed;

		// // 		selfHTML_.style.top = newTop + "px";

		// // 	}

		// // 	return self;
		// // };  // End Entity.move()


		// // entity.oldMove = function ( velocities, boundingElem ) {
		// //  ( {}, { {}, {} } ) -> ?

		// // I think there are good thoughts in here, so I don't want to lose
		// // them, but I'm not sure how exactly to use them

		// // Move within the bounds given using the x and y velocities given
		// // How to handle objects that don't have the field as their parent?
		// // I guess we won't move Mobs, we'll just move rows.
		
		// // 	var self 		= this;
		// // 	var selfHTML_ 	= self.html;

		// // 	// What units will the velocities be in? Need conversion?
		// // 	var xVelocity 	= velocities.x,
		// // 		yVelocity 	= velocities.y
		// // 	;  // end vars

		// // 	// Get own current screen position
		// // 	var selfRect 	= selfHTML_.getBoundingClientRect(),
		// // 		currentLeft = selfRect.left,
		// // 		currentTop	= selfRect.top;

		// // 	// Use velocity to calculate future screen position
		// // 	var futureLeft 	= currentLeft 	+ ( xVelocity / 2 );
		// // 	var futureTop 	= currentTop 	+ ( yVelocity / 2 );

		// // 	// Convert future screen position to offset position
		// // 	var futureOffset = Util.screenPosToOffsetPos( selfHTML_, { x: futureLeft, y: futureTop } );
		// // 	var futureOffsetLeft = ,
		// // 		futureOffsetTop = ;

		// // 	var boundedX 	= Util.getWithinLimits( futureLeft, xMax, xMin );
		// // 	var boundedY 	= Util.getWithinLimits( futureTop, 	yMax, yMin );

		// // 	// ,
		// // 		// xMax 		= bounds.xMax.x,
		// // 		// yMax 		= bounds.yMax.y,
		// // 		// xMin		= bounds.xMin.x,
		// // 		// yMin		= bounds.yMin.y,


		// // 	this.html.style.left


		// // };  // End Entity.oldMove()

	return entity;

};  // End Entity{}
