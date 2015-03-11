/* Created 02/28/15 */

'use strict'

var Player = function ( idNum, fieldHTML ) {
/*

Player object, hopefully decoupled enough to allow for
multiple players
*/

	var player = new Entity();

	// =================
	// SETUP VARIABLES
	// =================
	// Properties are so that they can be adjusted from the outside
	player.html 			= null;
	player.objType			= "Player";
	player.id 				= player.objType + "_" + idNum;
	// Purposefully, the field object is not made accessible to its child
	player.bounderHTML		= fieldHTML;

	player.width 			= fieldHTML.clientWidth / 20;

	player.currSpeedX 		= 0;
	player.speedX 			= ( fieldHTML.clientWidth / player.width ) / 4;

		// player.facing		 	= 0;  // Angle of the direction player is facing. Not needed for space invaders...
		// player.moveAngle		= 0;  // Angle of direction of movement
		// player.speed 			= 0;
		// // Which one? ^^^ or vvv
		// player.speedX 			= 0;  // to be based on own width and game field width?
		// player.speedY 			= 0;
		// player.maxSpeedX 		= 1;
		// player.maxSpeedY 		= 0;
		// // Or...
		// player.velocities 		= { x: 0, y: 0 };
		// player.maxVelocitiesMagnitudes = { x: 1, y: 0 };

		// // Stats
		// player.lives 			= 3;  // if === 0, player is dead
		// player.shots 			= 0;
		// player.hits 			= 0;

		// player.limits 			= {};  // { 0, field height - height }, { fieldwidth - width, field height - height }

		// Variables are things that won't ever be changed or searched for outside of this Player
		

	// =================
	// SETUP FUNCTIONS
	// =================
	var buildHTML = function () {
	/*

	Does not append the object
	*/
		var html = document.createElement( "div" );
		html.className 		= 'object player';
		html.id 			= player.id;

		// Noticeably bigger than mobs
		html.style.width 	= player.width + "px";
		html.style.height 	= "20px";

		return html;
	};  // End buildHTML()


	var addToDOM = function ( elem ) {
	/*

	??: A function for the student to build?
	*/

		// Player should maybe start at middle?
		var playerCentered 	= (fieldHTML.clientWidth / 2) - (player.width / 2);
		elem.style.left 	= playerCentered + "px";
		elem.style.bottom 	= "0px";

		player.bounderHTML.appendChild( elem );


	};  // End addtoDOM()


	// =================
	// RUNTIME FUNCTIONS
	// =================
		// var pressDirectionKey = function ( key ) {
		// /*

		// */


		// };   // end pressDirectionKey()


		// var releaseDirectionKey = function ( key ) {
		// /*

		// */


		// };   // end releaseDirectionKey()


		// var move = function ( direction ) {
		// /*

		// */
		// 	// ??: Is this needed or can I just use player.whatever?
		// 	var self = this;


		// 	// When key is pressed, speed is changed using speedMagnitudes
		// 	// and direction


		// };  // End Player.move()


		// var attack = function () {
		// /*

		// */

		// 	// Add one to shots fired count


		// };  // End Player.attack()


		// player.collideWith = function () {
		// /*

		// */


		// };  // End bullet.collideWith()


		// player.die = function () {
		// /*

		// */


		// };  // End Player.die()


		// player.update = function () {
		// /*

		// */

		// 	// Done continuously, whether moving or not, to catch input
		// 	// move();


		// };  // End Player.update()


		// // ============
		// // INPUT
		// // ============
		// player.keypress = new window.keypress.Listener();

		// player.bindInput = function ( keyCombo, keyDown, keyUp, thisObj ) {
		// /* ( str, func, func, {} ) -> {}

		// */
		// 	var obj = thisObj;

		// 	obj.keypress.register_combo({
		// 	    "keys"              : keyCombo,
		// 	    "on_keydown"        : keyDown,
		// 	    "on_keyup"          : keyUp,
		// 	    // "on_release"        : null,
		// 	    "this"              : obj,
		// 	    "prevent_default"   : true,
		// 	    // "prevent_repeat"    : false,
		// 	    // "is_unordered"      : false,
		// 	    // "is_counting"       : false,
		// 	    // "is_exclusive"      : false,
		// 	    // "is_solitary"       : false,
		// 	    // "is_sequence"       : false
		// 	});

		// 	return thisObj;

		// };  //  end player.bindInput()


		// ================
		// SET UP PLAYER (with inputs)
		// ================
		// EVENT LISTENERS
		// for ( var keyi = 0; keyi < player.leftKeyList.length; keyi++ ) {

		// 	player.bindInput( player.leftKeyList[ keyi ],
		// 		function () { player.changeDirection( "left" ); },
		// 		function () { player.changeDirection( "none" ); },
		// 		player
		// 	);

		// }; // end for ( leftKey )

		// for ( var keyi = 0; keyi < player.rightKeyList.length; keyi++ ) {

		// 	player.bindInput( player.rightKeyList[ keyi ],
		// 		function () { player.changeDirection( "right" ); },
		// 		function () { player.changeDirection( "none" ); },
		// 		player
		// 	);

		// }; // end for ( rightKey )


		// for ( var keyi = 0; keyi < player.fireKeyList.length; keyi++ ) {

		// 	player.bindInput( player.fireKeyList[ keyi ],
		// 		function () { player.shoot( player.bounderHTML ); },
		// 		function () {  },
		// 		player
		// 	);

		// }; // end for ( fireKey )


	// =================
	// INITIALIZATION
	// =================
	player.html = buildHTML();
	addToDOM( player.html );


	// =================
	// END
	// =================
	return player;

};  // End Player{}
