ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	//entities
	'game.entities.runner',
	'game.entities.floor',

	//levels
	'game.levels.test2'
)
.defines(function(){

Swordfish = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	floorLength: 100,
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.R, 'reset');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bind(ig.KEY.ENTER, 'ok');
        ig.input.bind(ig.KEY.SPACE, 'jump');

        //music

        ig.music.add( 'media/music.ogg' );

		ig.music.volume = 0.5;
		//ig.music.play();


		this.loadLevel( LevelTest2 );

		this.gravity = 250;

		this.player = this.spawnEntity( EntityRunner, 220, 16 );

		for( var i = 0; i < 13; i++ ) {

			this.spawnEntity( EntityFloor, i*100, 200+ Math.random() * 50 );



		}

		console.log(this.floorLength);
		

	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', Swordfish, 60, 1200, 700, 1 );

});
