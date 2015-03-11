/* Created 02/05/15 */

'use strict'

var Entity = function () {
/*

Entity object from which other entities are created
??: Maybe out of bounds collisions should be a check the student
constructs?
??: Should move reset speed to 0 each time?
*/
	var entity = this;

	// File names of images with which to animate death (by bullet here)
	// Should be added to at coder's own discretion
	entity.bulletDeathImages 	= [];
	// Library of enemies that could cause death and the images to
	// go with death by that emeny
	entity.deathAnimations 		= {
		"Bullet": entity.bulletDeathImages
	};

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
			console.log( "Object of type " + self.objType + " has hit the " + towardsWhichEdge + " edge of: ", self.bounderHTML );

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
		if ( ySpeed < 0 ) { towardsWhichEdge = "top"; }
		else if ( ySpeed > 0 ) { towardsWhichEdge = "bottom"; }

		// If it will go out of bounds, don't allow it to move
		var edgeHit = Util.whichEdgeAtSpeedY( selfHTML_, self.bounderHTML, ySpeed );

		// If the edge we're heading towards is hit, don't move, print a message
		if ( edgeHit === towardsWhichEdge ) {
			console.log( "Object of type " + self.objType + " has hit the " + towardsWhichEdge + " edge of: ", self.bounderHTML );

		} else {
			// Move the correct amount in the correct direction
			var offsetTop 	= selfHTML_.offsetTop,
				newTop 		= offsetTop + ySpeed;

			selfHTML_.style.top = newTop + "px";
		}

		return edgeHit;
	};  // End Entity.moveY()


	entity.deathAnimation = function ( imagesList, frameNum ) {
	/* ( int ) -> Entity
	
	Increase frame by 1 each time and call this recursively
	until the death animation is complete.

	Of course, right now it just removes the html. You
	have to put in custom death images in each type of entity.
	*/
		var self = this,
			selfHTML_ = self.html;

		// If there's an item at the index number frameNum
		if ( imagesList[ frameNum ] ) {

			selfHTML_.style[ "background-image" ] = 
				"url(" + imagesList[ frameNum ] + ")";

			var newFrame = frameNum + 1;
			self.deathAnimation( imagesList, newFrame );

		} else {

			selfHTML_.parentNode.removeChild(selfHTML_);

		}

		return self;
	};  // end Entity.deathAnimation()


	entity.die = function ( killer ) {
	/* ( str ) -> Entity
	
	Basically, just set dead to true and trigger death
	animation.
	??: should deathAnimation only be called when self.dead
	gets used?

	// TODO: Add ways to have different kinds of death animations
	*/
		var self = this;

		// Trigger death animation
		self.deathAnimation( self.deathAnimations[ killer ], 0 );

		// Tell whoever cares that this object needs
		// to be removed from its list at the right time
		self.dead = true;

		return self;
	};  // end Entity.die()


	return entity;

};  // End Entity{}
