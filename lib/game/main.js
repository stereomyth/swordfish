ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	//entities
	'game.entities.floor',
	'game.entities.backdrop',
	'game.entities.block',

	//levels
	'game.levels.sword'
)
.defines(function(){

Swordfish = ig.Game.extend({
	
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 250,
	speed: 0,
	score: 0,
	floorHeight: 500,
	lastPos: 0,
	floors: [],
	currentFloor: 0,
	floorIndex: 0,
	
	
	init: function() {
		ig.input.bind( ig.KEY.A, 'buttonA' );
		ig.input.bind( ig.KEY.S, 'buttonS' );
		ig.input.bind( ig.KEY.D, 'buttonD' );
		ig.input.bind( ig.KEY.F, 'buttonF' );

        ig.music.add( 'media/music.ogg' );
		ig.music.volume = 0.5;
		//ig.music.play();

		//this.font.alpha = 0.5;


		this.loadLevel( LevelSword );

		this.spawnEntity( EntityBackdrop, 0, 0, {bgNum:'bg01'} );
		this.spawnEntity( EntityBackdrop, 0, -80, {bgNum:'bg03'} );
		this.spawnEntity( EntityBackdrop, 0, -60, {bgNum:'bg02'} );

		
		for (var i = 0; i < 5; i++) {

			this.spawnFloor();
			
		}
		
		this.currentFloor = this.floors[this.floorIndex];

		console.log(this.currentFloor.holePosition);
		
	},
	
	update: function() {

		this.parent();

		this.screen.x += ig.system.tick * this.speed;
		//this.player.pos.x += ig.system.tick * this.speed;
        this.score += ig.system.tick * this.speed;

        //console.log(this.score);

        if ( ig.input.pressed('buttonA') ) {

            this.spawnBlock(1);

	    } else if ( ig.input.pressed('buttonS') ) {

            this.spawnBlock(2);

	    } else if ( ig.input.pressed('buttonD') ) {

            this.spawnBlock(3);

	    } else if ( ig.input.pressed('buttonF') ) {

            this.spawnBlock(4);

	    }

	},
	
	draw: function() {

		this.parent();
		
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );

		var s = this.score.floor().toString();
        this.font.draw( s, 10, 10, ig.Font.ALIGN.LEFT );
	},

	spawnBlock: function(number) {

		if (this.currentFloor.holePosition === 0){

			this.floorIndex++;
			
			this.currentFloor = this.floors[this.floorIndex];

			this.spawnBlock(number);
			
		} else {

			var settings = {parentFloor: this.currentFloor, slotBlock: this.currentFloor.holeName};

			this.spawnEntity( EntityBlock, this.currentFloor.pos.x + this.currentFloor.holePosition, 200, settings );

			this.floorIndex++;
			
			this.currentFloor = this.floors[this.floorIndex];
			
		}

		console.log(this.floorIndex);


	},

	spawnFloor: function() {

		var prevX, thisFloor;

		if(this.floors.length != 0){

			thisFloor = this.floors[this.floors.length-1];

			prevX = thisFloor.pos.x + thisFloor.floorLength;

		} else {

			prevX = 0;

		}

		this.floors.push(this.spawnEntity( EntityFloor, prevX, 400 ));

	}

});

ig.main( '#canvas', Swordfish, 60, 1200, 700, 1 );

});
