import device;

import ui.View;
import ui.ImageView;

import src.Entities.FloorTile as FloorTile

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			height:300,
			width:device.width,
			x:0,
			y:device.height - 300,
			backgroundColor: '#37B34A',
			canHandleEvents: false

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {
		var that = this;
		var i, floorTiles = new Array();

		for(i = 0; i < 4; i++) {

			floorTiles[i] = new FloorTile({x:300 * i});

			this.addSubview(floorTiles[i]);

		}

		// var floorTile = new FloorTile({});

		// this.addSubview(floorTile);

	};

});
