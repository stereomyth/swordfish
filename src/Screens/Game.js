import device, animate, math.util as math;

import ui.View, ui.ImageView, ui.TextView;

import src.Entities.Runner as Runner;
import src.Entities.Chaser as Chaser;
import src.Entities.Distract as Distract;
import src.Entities.Floor as Floor, src.Entities.FloorTile as FloorTile;
import src.Entities.Foreground as Foreground, src.Entities.Background as Background;
import src.Entities.Scoreboard as Scoreboard;
import src.Entities.BlockSelect as BlockSelect;
import src.soundcontroller as soundcontroller;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		supr(this, 'init', [opts]);
		this.build();

	};

	this.build = function() {
		var that = this;

		this.sound = soundcontroller.getSound();

		this.scenes = ['1','2','3','4','5','6','7','8'], this.scene, this.score;
		this.chasers = ['croc','shark','saw','crab'], this.monster, this.distracting = false;
		this.startSpeed = 50;
		this.tiles = [], this.gLevel = device.height - 230, 
		this.character = 'man', this.leftChoice, this.rightChoice;

		this.changeScene();

		this.buildScene();
		this.buildSel();

		// this.reset();

	};

	this.tick = function (dt) {

	  	this.score++;

	}

	this.updateScore = function () {
  		
	   this.scoreboard.setText(this.score);

	};

	this.increaseSpeed = function () {
  		
	  	this.speed += 10;

	};

	this.reset = function () {

		this.speed = this.startSpeed;
		this.score = 0;

		this.changeScene();
		this.changeSel();
		this.changeChaser();
		if (!this.runner) {

			this.runner = new Runner({ character: this.character, y: this.gLevel - 94	 });
			this.addSubview( this.runner );
			
		}

		for (i = 0; i < this.tiles.length; i++) {

			this.tiles[i].removeFromSuperview();

		}

		this.tiles.length = 0;
		this.spawnTile();
		// this.scoreTimer = setInterval(bind(this, this.updateScore), 100);
		this.speedTimer = setInterval(bind(this, this.increaseSpeed), 5000);
		this.sceneTimer = setInterval(bind(this, this.changeScene), 30000);
		this.distractTimer = setInterval(bind(this, this.spawnDistract ), 4000);

		if(this.distracting) {
			this.distracting = false;
			this.distract.removeFromSuperview();
			
		} 

		this.sound.play('loop');

		// this.spawnDistract();

	}

	this.spawnTile = function() {
		var that = this, xPos = device.width;

		floorTile = new FloorTile({ x: xPos, y: this.gLevel, scene: this.scene });

		this.addSubview(floorTile);

		floorTile.on('explode', function () {

			that.runner.die();

			that.speed = 0;

			that.sound.pause('loop');
			that.sound.play('scream');

			animate(that).wait(1000).then( function () {
				that.emit('game:die', that.score, that.monster);
				that.runner = undefined;
				// clearInterval(that.scoreTimer);
				clearInterval(that.speedTimer);
				clearInterval(that.sceneTimer);
				clearInterval(that.distractTimer);
				// console.log("yep death");
			});

		});

		this.tiles.push(floorTile);

	}

	this.solve = function (side) {
		var chosen = (side === 'left') ? this.leftChoice : this.rightChoice ;

		var tile1 = this.tiles[0], tile2 = this.tiles[1];

		if(tile1 && !tile1.solved) {

			tile1.drop(chosen);
			this.sound.play('punch');
			
		} else if (tile2 && !tile2.solved) {

			tile2.drop(chosen);
			this.sound.play('punch');

		}

	} 

	this.changeScene = function () {
		// console.log('changing scene')
		var r = math.random(0,this.scenes.length);

		if (this.scene) {

			this.flash();

			this.scene = this.scenes[r];

			this.floor.changeScene(this.scene);
			this.foreground.changeScene(this.scene);
			this.background.changeScene(this.scene);

			for (var i = 0; i < this.tiles.length; i++) {
				this.tiles[i].changeScene(this.scene);
			}

		} else {

			this.scene = this.scenes[r];

		}

	}

	this.buildScene = function () {

		this.background = new Background({ scene: this.scene });
		this.scoreboard = new Scoreboard();
		this.foreground = new Foreground({ scene: this.scene });
		this.floor = new Floor({ scene: this.scene, y: this.gLevel });
		this.chaser = new Chaser({ y: this.gLevel - 320 });

		this.addSubview( this.background );
		// this.addSubview( this.scoreboard );
		this.addSubview( this.foreground );
		this.addSubview( this.floor );
		this.addSubview( this.chaser );

	}

	this.buildSel = function () {
		var that = this;

		this.leftSel = new BlockSelect({ side: 'left' });
		this.rightSel = new BlockSelect({ side: 'right' });

		this.addSubview( this.leftSel );
		this.addSubview( this.rightSel );

		this.leftSel.on('blockSelect', function () {
			that.solve('left');
		});
		this.rightSel.on('blockSelect', function () {
			that.solve('right');
		});

		this.changeSel();

	}

	this.changeSel = function () {

		var r = math.random(0,2);

		if (r === 0) {

			this.leftSel.setSelects(1);
			this.leftChoice = 'hole1';
			this.rightSel.setSelects(2);
			this.rightChoice = 'hole2';

		} else {

			this.leftSel.setSelects(2);
			this.leftChoice = 'hole2';
			this.rightSel.setSelects(1);
			this.rightChoice = 'hole1';

		}

	}

	this.changeChaser = function () {

		var r = math.random(0,this.chasers.length);

		this.chaser.change(this.chasers[r]);

		this.monster = this.chasers[r]; 

		switch (this.chasers[r]) {
			case 'croc':
				this.monster = "DEATH GATOR"
			break;			
			case 'crab':
				this.monster = "INEXPLICABLE CRAB"
			break;			
			case 'shark':
				this.monster = "MEGA SHARK"
			break;			
			case 'saw':
				this.monster = "SPINNING DEATH"
			break;


		}

	}

	this.flash = function () {

		this.white = new ui.View({

			superview: this,
			backgroundColor: 'white',
			width: device.width,
			height: device.width,
			x: 0,
			y: 0,
			zIndex:101,
			canHandleEvents: false,
			opacity: 0,

		});

		this.sound.play('bulb');

		animate(this.white).now({ opacity: 1 }, 200).then({ opacity: 0 }, 500);

	}

	this.spawnDistract = function () {

		if(!this.distracting) {

			var r = math.random(0,20);

			if (r === 4) {

				this.distracting = true;
				this.distract = new Distract();
				this.addSubview( this.distract );
				this.sound.play('alien');
				
			} 

		}

	}

});

