import device;

import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height:300,
			width:300,
			image: "resources/images/blox01.png",
			canHandleEvents: false

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {


	};

});
