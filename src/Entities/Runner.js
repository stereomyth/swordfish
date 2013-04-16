import device, animate;

import ui.View, ui.SpriteView;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height:100,
			width:100,
			x:100,
			canHandleEvents: false,
			zIndex: 90,

		});

		supr(this, 'init', [opts]);
		this.build(opts.character);

	};

	this.build = function(character) {

		this.runner = new ui.SpriteView({

			superview: this,
			autoStart:true,
			x: 0,
			y: 0,
			width: 100,
			height: 100,
			url: 'resources/runner/' + character + '/' + character,
			frameRate: 30,
			defaultAnimation: "run"

		});

	};

	this.die = function () {

		this.explosion = new ui.SpriteView({

			superview: this,
			autoStart:true,
			x: -60,
			y: -100,
			width: 220,
			height: 300,
			url: 'resources/runner/explosion/explode',
			frameRate: 20,
			defaultAnimation: "man",
			loop: false,

		});

		this.runner.stopAnimation();

		animate(this).wait(1000).then(function(){

			this.removeFromSuperview();

		});

	}

});
