import device, animate;

import ui.View, ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			image: "resources/images/scores.png"

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {
		var that = this;

		this.menuButton = new ui.View({

			superview: this,
			// backgroundColor: 'rgba(255,0,0,0.5)',
			width: 200,
			height: 80,
			x: device.width / 2 - 100 ,
			y: device.height - 80,

		});

		this.menuButton.on('InputSelect', bind(this, function () {

			this.emit('scores:main');

		}));


	};

});
