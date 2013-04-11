import device;

import ui.TextView;

exports = Class(ui.TextView, function (supr) {

	var textPadding = 30, score = 0, currentScore = 0;

	this.init = function (opts) {

		opts = merge(opts, {

			superview: this,
			x: textPadding,
			y: 15,
			width: device.width - textPadding * 2,
			height: 300,
			autoSize: false,
			autoFontSize: true,
			size: 300,
			verticalAlign: 'top',
			horizontalAlign: 'center',
			wrap: false,
			color: '#FFFFFF'

		});

		supr(this, 'init', [opts]);

		this.build(opts.character);

	};

	this.updateScore = function(increaseBy) {

		var targetScore = score + increaseBy;

		var scoreIncriment = (increaseBy > 999) ? increaseBy / 500 : 1 ;

		var timeIncrement = 1000 / increaseBy;

		var scoreTimer = setInterval(bind(this, function () {

			if(currentScore < targetScore) {

				currentScore += Math.round(scoreIncriment);

				this.setText(currentScore);

			} else {

				score = currentScore;

				clearInterval(scoreTimer);

			}

		}), timeIncrement);

	}

	this.build = function(character) {

		this.setText(0);

	};

});
