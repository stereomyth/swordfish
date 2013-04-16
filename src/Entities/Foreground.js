import device, animate;

import ui.View, ui.ImageView;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			y:160,
			canHandleEvents: false,

		});

		supr(this, 'init', [opts]);

		this.build(opts.scene);

	};

	this.build = function(scene) {

		this.image1 = new ui.ImageView({

			superview: this,
			image: "resources/scene/" + scene + "/foreground.png",
			autoSize: true,

		});

		this.width = this.image1.getPosition().width

		this.image2 = new ui.ImageView({	

			superview: this,
			image: "resources/scene/" + scene + "/foreground.png",
			autoSize: true,
			x: this.width - 1,

		});

	};

	this.changeScene = function (scene) {

		this.image1.setImage("resources/scene/" + scene + "/foreground.png");
		this.image2.setImage("resources/scene/" + scene + "/foreground.png");

	}

	this.tick = function (dt) {

		this.do(this.image1);
		this.do(this.image2);

	}

	this.do = function (image) {
		var speed = this.getSuperview().speed / 2;

		if (image.getPosition().x < -(this.width )) {

			var target = (image === this.image1) ? this.image2 : this.image1 ;

			image.updateOpts({ x: this.width + target.getPosition().x - 1 })

		}

		animate(image).now({ x: image.getPosition().x - speed });

	}

});
