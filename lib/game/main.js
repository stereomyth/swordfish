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
	'game.entities.runner',
	'game.entities.controlls',
	'game.entities.gameover',

	//levels
	'game.levels.sword'
)
.defines(function(){

Swordfish = ig.Game.extend({
	
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 250,
	speed: 100,
	score: 0,
	floorHeight: 500,
	lastPos: 0,
	floors: [],
	currentFloor: 0,
	floorIndex: 0,
	player: 0,
	gameOver: false,
	currentSpeed: 300,
	
	
	init: function() {
		ig.input.bind( ig.KEY.A, 'buttonA' );
		ig.input.bind( ig.KEY.S, 'buttonS' );
		ig.input.bind( ig.KEY.D, 'buttonD' );
		ig.input.bind( ig.KEY.F, 'buttonF' );
		ig.input.bind(ig.KEY.ENTER, 'ok');
		ig.input.bind(ig.KEY.P, 'speedUp');
		ig.input.bind(ig.KEY.O, 'speedDown');

        ig.music.add( 'media/music.ogg' );
		ig.music.volume = 0.5;
		ig.music.play();

		//this.font.alpha = 0.5;


		this.loadLevel( LevelSword );

		this.spawnEntity( EntityBackdrop, 0, 0, {bgNum:'bg01', scrollSpeed: 0, zIndex:-5} );
		this.spawnEntity( EntityBackdrop, 0, 0, {bgNum:'bg03', scrollSpeed: -100, zIndex:-4} );
		this.spawnEntity( EntityBackdrop, 0, 0, {bgNum:'bg02', scrollSpeed: -150, zIndex:-3} );
		this.spawnEntity( EntityControlls, 340, 0);

		
		for (var i = 0; i < 3; i++) {

			this.spawnFloor('solid');
			
		}		

		for (var i = 0; i < 5; i++) {

			this.spawnFloor();
			
		}

		
		this.currentFloor = this.floors[this.floorIndex];

		//console.log(this.currentFloor.holePosition);

		this.player = this.spawnEntity( EntityRunner, 100, 300);
		
	},
	
	update: function() {

		if( ig.input.pressed('ok') ) {
            ig.system.setGame( Swordfish );
        }

        if( ig.input.pressed('speedUp') && this.currentSpeed < 1000 ) {
            ig.system.setGame( Swordfish );
            this.currentSpeed = 600;
            console.log(this.currentSpeed);
        }

        if( ig.input.pressed('speedDown') && this.currentSpeed > 0) {
            ig.system.setGame( Swordfish );
            this.currentSpeed = 200;
            console.log(this.currentSpeed);
        }

		if( this.gameOver ) {
            return;
        }

		this.parent();

		//this.screen.x += ig.system.tick * this.speed;
		//this.player.pos.x += ig.system.tick * this.speed;
        this.score += ig.system.tick * this.speed;
        //this.currentSpeed += ig.system.tick * 5;


        // console.log(this.currentSpeed);

        if ( ig.input.pressed('buttonA') ) {

            this.spawnBlock('shark');

	    } else if ( ig.input.pressed('buttonS') ) {

            this.spawnBlock('swordfish');

	    } else if ( ig.input.pressed('buttonD') ) {

            this.spawnBlock('giraffe');

	    } else if ( ig.input.pressed('buttonF') ) {

            this.spawnBlock('weights');

	    }


		if (this.currentFloor.holePosition === 0 ) {

			this.floorIndex++;
			
			this.currentFloor = this.floors[this.floorIndex];

			//this.spawnBlock(chosenBlox);
			
		} else if (this.currentFloor.solved) {

			this.floorIndex++;
			
			this.currentFloor = this.floors[this.floorIndex];
				
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

	spawnBlock: function(chosenBlox) {

		console.log(chosenBlox)

		if (!this.currentFloor.solved) {

			var settings = {parentFloor: this.currentFloor, slotBlock: this.currentFloor.holeName, chosenBlox: chosenBlox};

			this.spawnEntity( EntityBlock, this.currentFloor.pos.x + this.currentFloor.holePosition, -400, settings );
			ig	.game.sortEntitiesDeferred();

				
		}


	},

	spawnFloor: function(specify) {

		var prevX, thisFloor;

		if(this.floors.length != 0){

			thisFloor = this.floors[this.floors.length-1];

			prevX = thisFloor.pos.x + thisFloor.floorLength;

		} else {

			prevX = 0;

		}

		if (!specify) {

			if (Math.random() > 0.70 ? 1 : 0) {

				this.floors.push(this.spawnEntity( EntityFloor, prevX, 400, {solid: true} ));
				
			} else {
				
				this.floors.push(this.spawnEntity( EntityFloor, prevX, 400, {solid: false} ));

			}

			
		} else if ( specify === 'solid' ) {

			this.floors.push(this.spawnEntity( EntityFloor, prevX, 400, {solid: true} ));
	
		}


	}

});

ig.main( '#canvas', Swordfish, 60, 1200, 700, 1 );

});
