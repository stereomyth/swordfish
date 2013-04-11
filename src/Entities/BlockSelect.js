import device;

import ui.View;
import ui.ImageView;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		var xPos = (opts.side === 'left') ? 0 : device.width / 2;

		opts = merge(opts, {

			height:device.height,
			width:device.width / 2,
			x:xPos

		});

		supr(this, 'init', [opts]);

		// console.log(opts.side);

		this.build(opts);

	};

	this.build = function(opts) {

		var xPos = (opts.side === 'left') ? 50 : device.width / 2 - 150;

		var blockSelectIcon = new ui.ImageView({
			superview: this,
			x:  xPos,
			y:  device.height - 150,
			width: 100,
			height: 100,
			backgroundColor: "#0f0",
			canHandleEvents: false
		});

		this.on('InputSelect', bind(this, function () {

			var pope = (opts.side === 'left') ? 'left' : 'right';

			console.log(pope);

		}));

	};

});
