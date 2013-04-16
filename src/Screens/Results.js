import device math.util as math;

import ui.View, ui.ImageView, ui.TextView;

exports = Class(ui.ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			image: "resources/images/results.png"

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {

		var restartbutton = new ui.View({

			superview: this,
			x: 42,
			y: 414,
			width: 300,
			height: 147,
			// backgroundColor: 'rgba(0,225,0,0.5)',

		});

		var menubutton = new ui.View({

			superview: this,
			x: 128,
			y: 573,
			width: 120,
			height: 72,
			backgroundColor: 'rgba(225,0,0,0.5)',

		});

		this.headline = new ui.TextView({

			superview: this,
			x: 50,
			y: 90,
			width: 1000,
			height: 300,
			size: 260,
			fontFamily: "Amatic",
			wrap: true,
			autoFontSize: true,
			anchorX: 0,
			anchorY: 0,
			r: -0.04,
			lineHeight: 0.9,

		});

		restartbutton.on('InputSelect', bind(this, function () {

			this.emit('results:restart');

		}));

		menubutton.on('InputSelect', bind(this, function () {

			this.emit('results:menu');

		}));

	};

	this.setHeadline = function (score, monster) {

		this.names = ['CRACKHEAD', 'DOPEFIEND', 'DRUGBEAST'];
		this.moves = ['SPRINTS', 'RUNS', 'SCAMPERS'];
		this.distances = ['METERS', 'FATHOMS', 'PARSECS'];

		var r1 = math.random(0,this.names.length);
		var r2 = math.random(0,this.moves.length);
		var r3 = math.random(0,this.distances.length);


		this.headline.setText(this.names[r1] + " " + this.moves[r2] + " " + score + " " + this.distances[r3] + " FROM " + monster);

	}

});
