import device, animate math.util as math;

import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		this.hole1 = [ 'shark', 'bus' ];
		this.hole2 = [ 'organs', 'worm' ];

		this.blockShapes = (opts.chosen === 'hole1') ? this.hole1 : this.hole2 ;

		var r = math.random(0,this.blockShapes.length);

		this.block = this.blockShapes[r];

		opts = merge(opts, {

			image: "resources/block/" + this.block + ".png",
			x:87,
			y: -device.height,
			autoSize: true,
			zIndex: 95,

		});

		supr(this, 'init', [opts]);

		this.build(opts.chosen, opts.needed);

	};

	this.build = function(chosenShape, neededShape) {
		var that = this;

		// console.log(chosenShape);

		if (chosenShape === neededShape) {
			animate(this).now({y: 0}, 150, animate.easeIn).then(function(){
	  			that.getSuperview().solved = true;
			});

		} else {
			animate(this).now({y: -47}, 300, animate.easeIn)
		}


	};

});
