/* Created 03/09/15 */

'use strict'

var Stats = function ( id, containerHTML, mobTypes ) {
/* ( int, DOM obj, {} ) -> ( Stats )

Creates html elements to hold the statistics of the game
in the topbar and bottombar, maybe sidebar.
*/

	var stats = this;

	// =================
	// SETUP
	// =================
	stats.container 	= containerHTML;

	stats.topbar		= null;
	stats.bottombar		= null;
	stats.sidebar		= null;

	// All the numbers and counts, etc. that will need to be updated
	stats.mobX			= null;
	stats.mob1			= null;
	stats.mob2			= null;
	stats.mob3			= null;
	stats.elapsedTime	= null;

	stats.lives			= null;
	stats.shots			= null;
	stats.hits			= null;
	
	stats.travelDist	= null;


	stats.buildKillCount = function ( type ) {
	/* ( {} ) -> DOM obj

	Builds a kill counter div for the right type to go in
	the bar.
	Changes the properties of "this" (this Stats)
	*/
		var self = this;

		var outerClassNames	= "stat kill-count mob" + type;
		var iconClassNames	= "object mob" + type;
		// -------
		var outer			= document.createElement( "div" );
		outer.className		= outerClassNames;
		// -------
		var icon			= document.createElement( "div" );
		icon.className		= iconClassNames;
		// ------- The "X" that goes over their image, making them look dead
		var exOut			= document.createElement( "div" );
		exOut.className		= "death-x";
		// Temporary, is currently text, will be an image of an X
		var xNode 			= document.createTextNode( "X" );
		exOut.appendChild( xNode );
		// -------
		var countArea		= document.createElement( "div" );
		countArea.className	= "death-count";
		var countNode 		= document.createTextNode( "0" );
		countArea.appendChild( countNode );

		// -------
		icon.appendChild( exOut );
		outer.appendChild( icon );
		outer.appendChild( countArea );

		var propName = "mob" + type;

		// Hide mystery mob at the start
		if ( type === "x" ) {
			outer.className += " invisible";
		}

		// Add to self
		self[ propName ] = countNode;

		return outer;

	};  // end Stats.buildKillCount()


	stats.buildTimer = function () {
	/* ->

	Changes the properties of "this" (this Stats)
	*/
		var self = this;

		var timer			= document.createElement( "div" );
		var timeTextNode	= document.createTextNode( "Time: " );
		// -------
		var timeValSpan		= document.createElement( "span" );
		var startTime		= Util.msToMMSSMsMs( 0 );
		var timeValNode 	= document.createTextNode( startTime );
		timeValSpan.appendChild( timeValNode );


		timer.appendChild( timeTextNode );
		timer.appendChild( timeValSpan );

		self.elapsedTime = timeValNode;

		return timer;

	};  // end Stats.buildTimer()

	
	stats.buildTopbar = function () {
	/*

	Functions this calls change property values
	of this object.
	*/

		var self = this;

		var topbar 			= document.createElement( "section" );
		topbar.className 	= "topbar";

		var timer 			= self.buildTimer();

		var deathRow		= document.createElement( "div" );
		deathRow.className 	= "death-row";
		// Maybe get these passed in from Board
		for ( var mobi = 0; mobi < mobTypes.length; mobi++ ) {

			var type 		= mobTypes[ mobi ];
			var deathCount 	= self.buildKillCount( type );
			deathRow.appendChild( deathCount );

		}

		topbar.appendChild( timer );
		topbar.appendChild( deathRow );
		// self.whatever has been taken care of in individual functions

		return topbar;
	};  // end Stats.buildTopbar


	stats.buildBottombar = function () {
	/*

	Changes the properties of "this" (this Stats)
	*/

		var self = this;

		var bottombar 		= document.createElement( "section" );
		bottombar.className = "bottombar";

		// ==========
		// LIVES
		// ==========
		var lives 			= document.createElement( "div" );
		lives.className 	= "stat lives";
		var livesText		= document.createTextNode( "Lives: " );
		// Might be images in the end. No text. Or both.
		var livesCount 		= document.createElement( "span" );
		var livesCountTxt	= document.createTextNode( "3" );
		livesCount.appendChild( livesCountTxt );

		lives.appendChild( livesText );
		lives.appendChild( livesCount );

		// ==============
		// BULLET THINGS
		// ==============
		var bulletStats 	= document.createElement( "div" );
		bulletStats.className = "bullet-stats";

		// - Shots -
		var shots 			= document.createElement( "div" );
		shots.className 	= "stat shots";
		var shotsText		= document.createTextNode( "Shots: " );

		var shotsCount 		= document.createElement( "span" );
		// TODO: Make contingency for >999 (DEATH/DESTROYER)
		var shotsCountTxt	= document.createTextNode( "000" );  // add 0's onto beginning
		shotsCount.appendChild( shotsCountTxt );

		shots.appendChild( shotsText );
		shots.appendChild( shotsCount );

		// - Hits -
		var hits 			= document.createElement( "div" );
		hits.className 		= "stat hits";
		var hitsText		= document.createTextNode( "Hits: " );

		var hitsCount 		= document.createElement( "span" );
		var hitsCountTxt	= document.createTextNode( "00" );  // add 0's onto beginning
		hitsCount.appendChild( hitsCountTxt );

		hits.appendChild( hitsText );
		hits.appendChild( hitsCount );

		bulletStats.appendChild( shots );
		bulletStats.appendChild( hits );

		// --- Add all of them ---
		bottombar.appendChild( lives );
		bottombar.appendChild( bulletStats );

		// Changes Stats properties
		self.lives			= livesCountTxt;
		self.shots			= shotsCountTxt;
		self.hits			= hitsCountTxt;

		return bottombar;
	};  // end Stats.buildBottombar


	stats.buildProperties = function () {
	/* ->

	All appending to doc goes in Board because they
	need to be placed before and after Field's element
	*/
		var self = this;

		self.topbar 	= self.buildTopbar();
		self.bottombar 	= self.buildBottombar();

		// ===========
		// SIDEBAR
		// ===========
		var sidebar 		= document.createElement( "div" );
		sidebar.className 	= "sidebar";

		self.sidebar 		= sidebar;


		return self;
	};  // end Stats.buildHTML()


	// =================
	// RUNTIME FUNCITONS
	// =================
	stats.updateStat = function ( stat, value )  {
	/* ->

	*/
		var self = this;

		if ( stat === "lives" ) {
			// update lives images too
			self[ "lives" ].nodeValue = value;

		} else if ( stat === "elapsedTime" ) {
			var newTime = Util.msToMMSS( value );
			self[ "elapsedTime" ].nodeValue = newTime;

		} 

		// else if ( stat === "travelDist" ) {}

		else {
			self[ stat ].nodeValue = value;

		}

		return self;

	};  // end StatsDisplay.updateStat()


	// =================
	// INITIALIZATION
	// =================
	stats = stats.buildProperties();


	// =================
	// END
	// =================
	return stats;

};  // End Stats{}
