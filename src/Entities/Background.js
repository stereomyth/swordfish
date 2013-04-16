import device;

import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height:device.height,
			width:device.width,
			image: "resources/scene/" + opts.scene + "/background.png",
			canHandleEvents: false,
			autoSize:true

		});

		supr(this, 'init', [opts]);

		this.build(opts.scene);

	};

	this.build = function(scene) {

		// var foreground = new ui.ImageView({
		// 	superview: this,
		// 	width: device.width,
		// 	height: device.height,
		// 	image: "resources/scene/" + scene + "/background.png",
		// 	autoSize: true
		// });

	};

	this.changeScene = function (scene) {

		this.setImage("resources/scene/" + scene + "/background.png");

	}

});
