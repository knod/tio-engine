/* Created 02/28/15 */

'use strict'

var Mob = function ( idNum, type, rowHeight, rowNum, colWidth, colNum, fieldHTML ) {
/*

Mobs object, controlling behavior of AI
??: Need width? Maybe for collision checks?
??: How about speed? Would need horizontal speed for collision checks?
??: Need vertical speed for collision checks?
*/
	var mob = this;

	// Properties are so that they can be adjusted from the outside
	mob.idNum 		= idNum;
	mob.objType		= "mob";
	mob.mobType		= type;
	mob.bounderHTML	= fieldHTML;

	// Doesn't really need rowHeight property, but I don't want it to
	// get mentally lost in the noise. Determines style.top
	mob.rowHeight 	= rowHeight;
	mob.rowNum		= rowNum;
	// Same
	mob.colWidth 	= colWidth;
	mob.colNum 		= colNum;

	mob.html 		= null;

	// Both handled in by Rows parent object?
	mob.speedX 		= 0;  // to be based on width and game field width?
	mob.speedY		= 0;

	// Variables are things that won't ever be changed or searched for outside of this Mob
	

	var buildHTML = function () {
	/*

	Does not add the html property to the object
	*/
		var html = document.createElement( "div" );
		html.className 	= "mob mob" + mob.mobType;
		html.id 		= "mob_" + mob.idNum;

		var topPos 		= mob.rowHeight * mob.rowNum;
		html.style.top 	= topPos + "px";

		var leftPos 	= mob.colWidth * mob.colNum;
		html.style.left = leftPos + "px";

		mob.bounderHTML.appendChild( html );

		return html;
	};  // End buildHTML()


	// =================
	// RUNTIME FUNCTIONS
	// =================
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

		// Add to death count and hits count


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
