import device, animate math.util as math;

import ui.View, ui.ImageView, ui.SpriteView;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height: device.height,
			width: device.width,
			zIndex: 105,
			canHandleEvents: false,

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {
		var that = this;

		this.alien = new ui.SpriteView({

			superview: this,
			autoStart:true,
			x: -400,
			y: -100,
			width:369,
			height:192,
			url: 'resources/distract/alien',
			frameRate: 20,
			defaultAnimation: "idle",
			zIndex: 105,
			scale: 1.5,

		});

		animate(this.alien).now({ 

			x: device.width / 2 - 553 / 2, 
			y: device.height / 2 - 380 / 2

		}, 1000).then(function() {

			this.invasion = new ui.ImageView({

				superview: that,
				image: "resources/distract/text.png",
				autoSize: true,
				x: device.width / 2 - 334 / 2,
				y: device.height - 220,


			});

		});

		this.hitPoints = 3;

		this.alien.on('InputSelect', bind(this, function () {

			that.hitPoints--;

			if(that.hitPoints === 0){

				that.explode();
				
			}

		}));

	};

	this.showText = function() {



	};

	this.explode = function() {

		this.explosion = new ui.SpriteView({

			superview: this,
			autoStart:true,
			x: device.width / 2 - (737 * 1.5) / 2,
			y: device.height / 2 - (369 * 1.5) / 2,
			width: 737,
			height: 369,
			url: 'resources/distract/distract',
			frameRate: 20,
			defaultAnimation: "explode",
			loop: false,
			zIndex: 106,
			scale:1.5,
			canHandleEvents: false,

		});

		this.getSuperview().sound.stop('alien');
		this.getSuperview().sound.play('boom');


		animate(this).wait(300)
			.then(function(){

				this.alien.stopAnimation();
				
			})
			.wait(1000)
			.then(function(){

				this.getSuperview().distracting = false;
				this.removeFromSuperview();

			});

	};

});
