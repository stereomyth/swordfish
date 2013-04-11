import device

import ui.View as View;
import ui.TextView as TextView;
import ui.StackView as StackView;
import ui.SpriteView as SpriteView;

import src.Screens.Title as TitleScreen;
import src.Screens.Game as GameScreen;

exports = Class(GC.Application, function () {

	this.initUI = function () {

		var titlescreen = new TitleScreen();
		var gamescreen = new GameScreen();

		var stackView = new StackView({

			superview: this.view,
			height: device.height,
			width: device.width

		});

		// stackView.push(titlescreen);
		stackView.push(gamescreen);

		titlescreen.on('titlescreen:start', function () {
			stackView.push(gamescreen);
		});

		// resultscreen.on('resultscreen:restart', function () {
		// 	rootView.pop();
		// });

		
	};

	this.launchUI = function () {};

});
