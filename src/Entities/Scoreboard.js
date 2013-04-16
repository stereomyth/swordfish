import device;

import ui.TextView;

exports = Class(ui.TextView, function (supr) {

	var textPadding = 30, score = 0, currentScore = 0, frame = 0;

	this.init = function (opts) {

		opts = merge(opts, {

			verticalAlign: 'top',
			autoSize: false,
			textAutoSize: true,
			height: 500,
			color: '#FFFFFF',
			width: device.width - textPadding * 2,
			size: 100,
			wrap: false,
			text: '01',
			x: textPadding,
			y: 10,
			strokeWidth: 10,
			strokeColor: "rgba(0,0,0,0.1)",
			horizontalAlign: 'right',

		});

		supr(this, 'init', [opts]);

		this.text = 0;

	};

	this.tick = function (dt) {

		// this.setText(this.text);

		// console.log(this.getSuperview().score);
  		
  		// this.newScore = this.getSuperview().score;

  		// if (this.newScore === 0) {

  		// 	this.setText('0');

  		// } else if (this.score != this.newScore) {

  		// 	// this.updateScore(this.newScore - this.updateScore);
  		// 	// this.updateScore(this.newScore);
  		// 	this.score = this.newScore;
  		// 	this.setText(this.score);

  		// }
	};

	this.updateScore = function(target) {

		this.i = 1 ;

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

});
