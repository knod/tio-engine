/* Created 02/28/15 */

'use strict'

var Player = function ( id, fieldHTML ) {
/*

Player object, hopefully decoupled enough to allow for
multiple players
*/
	var player = this;

	// =================
	// SETUP VARIABLES
	// =================
	// Properties are so that they can be adjusted from the outside
	player.objType			= "player";
	player.id 				= "player-" + id;
	// Purposefully, the field object is not made accessible to its child
	player.fieldHTML		= null;
	player.html 			= null;

	player.facing		 	= 0;  // Angle of the direction player is facing. Not needed for space invaders...
	player.moveAngle		= 0;  // Angle of direction of movement
	player.speed 			= 0;
	// Which one? ^^^ or vvv
	player.xSpeed 			= 0;  // to be based on own width and game field width?
	player.ySpeed 			= 0;

	// Stats
	player.lives 			= 3;  // if === 0, player is dead
	player.shots 			= 0;
	player.hits 			= 0;

	// Variables are things that won't ever be changed or searched for outside of this Player
	

	// =================
	// SETUP FUNCTIONS
	// =================
	var buildHTML = function () {
	/*

	Does not append the object
	*/
		var html = document.createElement( "div" );

		return html;
	};  // End buildHTML()


	// =================
	// RUNTIME FUNCTIONS
	// =================
	var move = function () {
	/*

	*/


	};  // End Player.move()


	var attack = function () {
	/*

	*/


	};  // End Player.attack()


	player.collideWith = function () {
	/*

	*/


	};  // End bullet.collideWith()


	player.die = function () {
	/*

	*/


	};  // End Player.die()


	player.update = function () {
	/*

	*/

		// Done continuously, whether moving or not, to catch input
		move();


	};  // End Player.update()


	// =================
	// INITIALIZATION
	// =================
	player.html = buildHTML();


	// =================
	// END
	// =================
	return player;

};  // End Player{}
