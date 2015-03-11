/* Created 02/28/15 */

'use strict'

var Bullet = function ( idNum, shooterType, shooterHTML, fieldHTML ) {
/*

Bullets object, controlling behavior of bullets

WARNING: The Bullet and the shooter have to be DOM siblings
*/
	var bullet = new Entity();

	// Properties are so that they can be adjusted from the outside
	bullet.html 		= null;
	bullet.objType		= "Bullet";
	// Make sure it's unique, since there's no global bullet count (each
	// shooter object has its own count). For a Mob, Rows should handle that
	bullet.id 			= bullet.objType + "_" + shooterType + "_" + idNum;
	bullet.bounderHTML	= fieldHTML;

	bullet.shooterType	= shooterType;
	var shooterHTML 	= shooterHTML;  // Just want to remind us this is here

	// Variables are things that won't ever be changed or searched for outside of this Bullet
	// Needed for placement in the field
	var bulletWidth 	= 4,
		bulletHeight 	= 7;

	var speed 			= { x: 0, y: 0 };
	// 1% of field height, since starting height can be different
	var vertSpeed 		= fieldHTML * 0.1;
	var maxSpeed 		= { x: 0, y: vertSpeed }; // to be based on width and game field width?


	var buildHTML = function () {
	/*

	Does not append the object
	*/
		var html = document.createElement( "div" );
		html.className 		= 'object bullet';
		html.id 			= bullet.id;

		html.style.width 	= bulletWidth + "px";
		html.style.height 	= bulletHeight + "px";

		return html;
	};  // End buildHTML()


	var addToDOM = function ( bulletElem ) {
	/* 

	WARNING: The Bullet and the shooter have to be DOM siblings
	// TODO: Using shooterType, place top or bottom in the right position

	??: A function for the student to build?
	*/

		// Use the shooterHTML to get the coords for the bullet elem
		var shooterWidth 		= shooterHTML.offsetWidth,
			shooterLeft 		= shooterHTML.offsetLeft,
			shooterHorCenter 	= shooterLeft + ( shooterWidth / 2 )
		;
		// bulletWidth from Bullet's scope
		var bulletLeft 			= shooterHorCenter - ( bulletWidth / 2 );

		// Base the vertical placement on the type of shooter. For funzies.
		var bulletTop = null;
		if ( shooterType === "Player" ) {
			// Start the bullet above the player
			bulletTop = ( shooterHTML.offsetTop - bulletHeight );

		} else if ( shooterType === "Mob" ) {
			// Start the bullet below the mob
			bulletTop = shooterHTML.offsetTop + shooterHTML.offsetHeight;

		}

		// Bullet should maybe start at middle of its shooter
		bulletElem.style.left 	= bulletLeft + "px";
		bulletElem.style.top 	= bulletTop + "px";

		bullet.bounderHTML.appendChild( bulletElem );

		return bulletElem;
	};  // End addtoDOM()


	// =================
	// RUNTIME FUNCTIONS
	// =================
		// // bullet.moveX = function () {};  // End Bullet.moveX()


		// bullet.moveY = function () {
		// /*

		// */


		// };  // End Bullet.moveY()


		// bullet.collideWith = function () {
		// /*

		// */


		// };  // End Bullet.collideWith()


	// ===============
	// INITIALIZATION
	// ===============
	bullet.html = buildHTML();
	addToDOM( bullet.html );

	return bullet;
};  // End Bullet{}