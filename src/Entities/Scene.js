import device;

import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height:device.height,
			width:device.width,
			image: "resources/scenes/mountain/grad.png",
			canHandleEvents: false

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {


	};

});
