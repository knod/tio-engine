/* Created 02/28/15 */

'use strict'

var Mob = function ( id, type, width, colNum, rowNum, fieldHTML ) {
/*

Mobs object, controlling behavior of AI
??: Need width? Maybe for collision checks?
??: How about speed? Would need horizontal speed for collision checks?
??: Need vertical speed for collision checks?
*/
	var mob = this;

	// Properties are so that they can be adjusted from the outside
	mob.objType		= "mob";
	mob.mobType		= type;
	mob.id 			= "mob-" + id;
	mob.fieldHTML	= fieldHTML;

	mob.colNum 		= colNum;
	mob.rowNum		= rowNum;

	mob.html 		= null;

	// Both handed in by Rows parent object?
	mob.speedX 		= 0;  // to be based on width and game field width?
	mob.speedY		= 0;

	// Variables are things that won't ever be changed or searched for outside of this Mob
	

	var buildHTML = function () {
	/*

	Does not append the object
	*/


	};  // End buildHTML()


	// =================
	// RUNTIME FUNCTIONS
	// =================
	mob.moveX = function () {
	/*

	*/


	};  // End Mob.moveX()


	mob.moveY = function () {
	/*

	*/


	};  // End Mob.moveY()


	mob.attack = function () {
	/*

	*/


	};  // End Mob.attack()


	mob.collideWith = function () {
	/*

	*/


	};  // End Mob.collideWith()


	mob.die = function () {
	/*

	*/


	};  // End Mob.die()


	// Does a mob's row handle all its updates?
	// mob.update = function () {};  // End Mob.update()


	// =================
	// INITIALIZATION
	// =================
	mob.html = buildHTML();


	// ===========
	// END
	// ===========
	return mob;
	
};  // End Mobs{}
