import device;

import ui.View;
import ui.SpriteView as SpriteView;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height:100,
			width:100,
			x:100,
			y:device.height - 390,
			canHandleEvents: false

		});

		supr(this, 'init', [opts]);

		// console.log([opts]);

		this.build(opts.character);

	};

	this.build = function(character) {

		var sprite = new SpriteView({

			superview: this,
			autoStart:true,
			x: 0,
			y: 0,
			width: 100,
			height: 100,
			url: 'resources/runners/' + character + '/' + character,
			frameRate: 30,
			defaultAnimation: "run"

		});

	};

});
