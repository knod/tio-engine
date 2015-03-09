/* Created 02/28/15 */

'use strict'

var Bullet = function ( id, shooterType, fieldHTML ) {
/*

Bullets object, controlling behavior of bullets
*/
	var bullet = new Entity();

	// Properties are so that they can be adjusted from the outside
	bullet.objType		= "bullet";
	bullet.shooterType	= shooterType;
	bullet.id 			= "bullet_" + id;
	bullet.bounderHTML	= fieldHTML;

	bullet.html 		= null;

	// bullet.speedX 		= 0;  // to be based on width and game field width?
	bullet.speedY		= 0;

	// Variables are things that won't ever be changed or searched for outside of this Bullet
	

	var buildHTML = function () {
	/*

	Does not append the object
	*/
		var html = document.createElement( "div" );

		return html;
	};  // End buildHTML()


	var addToDOM = function ( elem ) {
	/*

	??: A function for the student to build?
	*/

		// Bullet should maybe start at middle of its shooter
		var bulletCentered 	= 5;  // Yeah, needs calculation
		elem.style.left 	= bulletCentered + "px";
		var bulletY 		= 5;  // Top of shooter + own height
		elem.style.bottom 	= bulletY + "px";

		bullet.bounderHTML.appendChild( elem );

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


		// bullet.die = function () {
		// /*

		// */


		// };  // End Bullet.die()

	return bullet;
};  // End Bullet{}