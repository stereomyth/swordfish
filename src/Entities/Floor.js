import device, animate;

import ui.View, ui.ImageView;


var floorTiles = new Array();

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height: 230,
			width: device.width,
			x: 0,
			image: "resources/scene/" + opts.scene + "/floor.png",
			canHandleEvents: false,
			clip: true,

		});

		supr(this, 'init', [opts]);

		this.build();


	};

	this.build = function() {
		
	};

	this.changeScene = function (scene) {

		this.setImage("resources/scene/" + scene + "/floor.png");

	}

});
