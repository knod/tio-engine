/* Created 02/28/15 */

'use strict'

var Bullet = function ( id, shooterType, fieldHTML ) {
/*

Bullets object, controlling behavior of bullets
*/
	var bullet = this;

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