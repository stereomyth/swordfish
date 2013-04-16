import device, animate, math.util as math;
import src.Entities.Block as Block;

import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		this.tileShapes = ['hole1','hole2'];
		var r = math.random(0,this.tileShapes.length);
		this.hole = this.tileShapes[r];

		opts = merge(opts, {

			height:230,
			width:300,
			image: "resources/scene/" + opts.scene + "/" + this.hole + ".png",
			// backgroundColor: "red",
			canHandleEvents: false

		});


		supr(this, 'init', [opts]);

		this.solved = false;
		this.checked = false;
		this.dropped = false;

		this.build();

	};

	this.build = function() {
		
	};

	this.drop = function (chosen) {

		if (!this.dropped) {

			this.block = new Block({ chosen: chosen, needed: this.hole });
			this.addSubview( this.block );
			this.dropped = true;
			
		}

	};

	this.tick = function (dt) {
		var that = this;
		var speed = this.getSuperview().speed;

		if(this.solved){

		}

		var xPos = this.getPosition().x; 

		if(xPos > -320) {
			
	  		animate(this).now({x: xPos - speed});

	  		if(xPos < 110 && !this.checked) {
	  			this.checked = true;

				this.getSuperview().spawnTile();

	  			if(!this.solved){

	  				this.emit('explode');

	  			}

	  		}

		} else {

			this.getSuperview().tiles.shift();
			this.removeFromSuperview();

		}

	};

	this.changeScene = function (scene) {

		this.setImage("resources/scene/" + scene + "/" + this.hole + ".png");

	}

});
