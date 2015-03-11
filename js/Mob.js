/* Created 02/28/15 */

'use strict'

var Mob = function ( idNum, type, cellDimensions, cellPos, mobWidth, fieldHTML ) {
/*

Mobs object, controlling behavior of AI
??: Need width? Maybe for collision checks?
??: How about speed? Would need horizontal speed for collision checks?
??: Need vertical speed for collision checks?
*/
	var mob = new Entity();

	// Properties are so that they can be adjusted from the outside
	// Variables are things that won't ever be changed or searched for outside of this Mob

	mob.html 		= null;
	mob.objType		= "Mob";  // bullet needs this so it won't shoot its own mob
	mob.id 			= mob.objType + "_" + idNum;
	mob.bounderHTML	= fieldHTML;

	mob.mobType		= type;

	// Rows needs rowNum and colNum as properties for movement and for shooting
	mob.rowNum		= cellPos.y;
	mob.colNum 		= cellPos.x;

	var mobWidth 	= mobWidth;  // just a guess
	var mobHeight 	= cellDimensions.height / 2;  // just a guess


	var buildHTML = function () {
	/*

	Does not add the html property to the object
	*/
		var html = document.createElement( "div" );
		// For color
		html.className 	= "mob mob" + mob.mobType;
		// Not sure we need this, but maybe it will help
		// ??: Should DOM id be based on mob.id? Or row and col numbers? We
		// can get row and col info elsewhere
		html.id 		= mob.id;

		html.style.width 	= mobWidth + "px";
		html.style.height 	= mobHeight + "px";

		return html;
	};  // End buildHTML()


	var addToDOM = function ( elem ) {
	/*

	??: A function for the student to build?
	*/

		var leftPos 	= cellDimensions.width * mob.colNum;
		elem.style.left = leftPos + "px";
		var topPos 		= cellDimensions.height * mob.rowNum;
		elem.style.top 	= topPos + "px";

		mob.bounderHTML.appendChild( elem );

	};  // End addToDOM()

	// =================
	// RUNTIME FUNCTIONS
	// =================
		// mob.attack = function () {
		// /*

		// */


		// };  // End Mob.attack()


		// mob.collideWith = function () {
		// /*

		// */


		// };  // End Mob.collideWith()


		// mob.die = function () {
		// /*

		// */

		// 	// Add to death count and hits count


		// };  // End Mob.die()


		// Does a mob's row handle all its updates?
		// mob.update = function () {};  // End Mob.update()


	// =================
	// INITIALIZATION
	// =================
	mob.html = buildHTML();
	addToDOM( mob.html );


	// ===========
	// END
	// ===========
	return mob;
	
};  // End Mobs{}
