import device, animate math.util as math;

import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			image: "resources/chaser/croc.png",
			x:-50,
			autoSize: true,
			anchorX: 0,
			anchorY: 70,

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {
		var that = this;

		animate(this).now(this.goof);

	};

	this.change = function(monster) {

		this.setImage("resources/chaser/" + monster + ".png");

	};

	this.goof = function() {

		animate(this).clear().now({ r: -0.2 }, 500).then({ r: 0.5 }, 500).then(this.goof);

	};

});
