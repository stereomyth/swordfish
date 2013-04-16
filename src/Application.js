import device

import ui.View as View;
import ui.TextView as TextView;
import ui.StackView as StackView;
import ui.SpriteView as SpriteView;

import src.Screens.Title as Title;
import src.Screens.Game as Game;
import src.Screens.Results as Results;
import src.Screens.Scores as Scores;

exports = Class(GC.Application, function () {

	this.initUI = function () {

		var title = new Title();
		var game = new Game();
		var results = new Results();
		var scores = new Scores();

		

		var stackView = new StackView({

			superview: this.view,
			height: device.height,
			width: device.width,
			

		});

		stackView.push(title);

		title.on('title:start', function (runner) {
			stackView.push(game, {noAnimate: true});
			game.character = runner;
			game.reset();
		});

		title.on('title:scores', function (runner) {
			stackView.push(scores, {noAnimate: true});
		});

		scores.on('scores:main', function (runner) {
			stackView.pop(scores, {noAnimate: true});
		});

		game.on('game:die', function (score, monster) {
			stackView.push(results, {noAnimate: true});
			results.setHeadline(score, monster);
		});

		results.on('results:restart', function () {
			stackView.pop(results);
			game.reset();
		});

		results.on('results:menu', function () {
			stackView.pop(game);
			stackView.pop(results);
		});

	};

	this.launchUI = function () {};

});
