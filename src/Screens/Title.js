import device, animate;

import ui.View, ui.ImageView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			image: "resources/images/title.png"

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {
		var that = this;

		this.runner = 'man',

		this.runners = ['man', 'devil', 'mute', 'mummy', 'frog', 'spaceman'];
		this.i = 0;

		this.startbutton = new ui.View({

			superview: this,
			// backgroundColor: 'rgba(255,0,0,0.5)',
			width: 280,
			height: 200,
			x: 170,
			y: 280,

		});

		this.startbutton.on('InputSelect', bind(this, function () {

			this.emit('title:start', this.runner);

		}));

		this.scoresbutton = new ui.View({

			superview: this,
			// backgroundColor: 'rgba(255,0,0,0.5)',
			width: 250,
			height: 150,
			x: 180,
			y: 520,

		});

		this.scoresbutton.on('InputSelect', bind(this, function () {

			this.emit('title:scores');

		}));

		this.pill = new ui.ImageView({

			superview: this,
			image: "resources/images/pill-man.png",
			x: 745,
			y: 400,
			autoSize: true,
			scale: 2,

		});

		pillMove.call(this.pill);

		this.left = new ui.ImageView({

			superview: this,
			image: "resources/images/arrow.png",
			x: 550,
			y: 470,
			autoSize: true,

		});

		this.right = new ui.ImageView({

			superview: this,
			image: "resources/images/arrow.png",
			x: 1210,
			y: 560,
			autoSize: true,
			r: 3.142,

		});

		this.left.on('InputSelect', bind(this, function () {

			this.i--;

			this.i = (this.i == -1) ? this.runners.length-1 : this.i ;

			that.pill.setImage("resources/images/pill-" + this.runners[this.i] + ".png");

			this.runner = this.runners[this.i];

		}));

		this.right.on('InputSelect', bind(this, function () {

			this.i++;

			this.i = (this.i == this.runners.length) ? 0 : this.i ;

			that.pill.setImage("resources/images/pill-" + this.runners[this.i] + ".png");

			this.runner = this.runners[this.i];

		}));

	};

	function pillMove () {

		animate(this).clear().now({ y: 430 }, 2000, animate.easeInOut).then({ y: 370 }, 2000, animate.easeInOut).then(pillMove.bind(this));

	}

});
