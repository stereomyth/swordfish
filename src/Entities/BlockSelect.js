import device;

import ui.View, ui.ImageView;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		var xPos = (opts.side === 'left') ? 0 : device.width / 2;

		opts = merge(opts, {

			height:device.height,
			width:device.width / 2,
			x:xPos,
			zIndex:100

		});

		this.side = opts.side;

		supr(this, 'init', [opts]);
		this.build();
		

	};

	this.build = function() {

		this.on('InputSelect', bind(this, function () {

			this.emit('blockSelect');

		}));

		this.icon = new ui.ImageView({
			superview: this,
			y:  device.height - 150,
			canHandleEvents: false,
			height:	94,
		});

	};

	this.setSelects = function (blockNum) {

		this.icon.setImage("resources/block/select" + blockNum + ".png");

		var width = (blockNum === 1) ? 140 : 94;
		var xPos = (this.side === 'left') ? 50 : device.width / 2 - width - 50;

		this.icon.updateOpts({ x: xPos, width: width });

		// console.log(blockSelectIcon.getPosition().width);

	}

});
