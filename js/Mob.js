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
	// Variables are things that won't ever be changed or searched for outside of this Mob

	mob.html 		= null;
	mob.idNum 		= idNum;
	mob.objType		= "mob";
	mob.mobType		= type;
	mob.bounderHTML	= fieldHTML;

	// Doesn't really need rowHeight property, but I don't want it to
	// get mentally lost in the noise. Determines style.top
	var rowHeight 	= rowHeight;
	mob.rowNum		= rowNum;
	// Same
	var colWidth 	= colWidth;
	mob.colNum 		= colNum;
	var mobWidth 	= colWidth/2.2;  // just a guess
	var mobHeight 	= rowHeight/2;  // just a guess

	// Both handled in by Rows parent object?
	mob.speedX 		= 0;  // to be based on width and game field width?
	mob.speedY		= 0;

	

	var buildHTML = function () {
	/*

	Does not add the html property to the object
	*/
		var html = document.createElement( "div" );
		// For placement and color
		html.className 	= "mob mob" + mob.mobType;
		// Not sure we need this, but maybe it will help
		// This might need to be based on idNum, not sure
		html.id 		= "row_" + mob.rowNum + "col_" + mob.colNum;

		html.style.width 	= mobWidth + "px";
		html.style.height 	= mobHeight + "px";

		var topPos 		= rowHeight * mob.rowNum;
		html.style.top 	= topPos + "px";
		var leftPos 	= colWidth * mob.colNum;
		html.style.left = leftPos + "px";

		mob.bounderHTML.appendChild( html );

		return html;
	};  // End buildHTML()


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


	// ===========
	// END
	// ===========
	return mob;
	
};  // End Mobs{}
