import device;

import ui.View;
import ui.ImageView as ImageView;

exports = Class(ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			image: "resources/images/menuSplashScreen.jpg"

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {

		var startbutton = new ui.View({

			superview: this,
			width: device.width,
			height: device.height

		});

		startbutton.on('InputSelect', bind(this, function () {

			this.emit('titlescreen:start');

		}));


		// var gopher = new ImageView({
			
		// 	superview: this,
		// 	x: 200,
		// 	y: 200,
		// 	autoSize:true,
		// 	image: 'resources/images/gopher.jpg'

		// });




	};

});
