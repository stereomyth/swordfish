import device;
import animate;

import ui.View;
import ui.ImageView;
import ui.TextView;

import src.Entities.Runner as Runner;
import src.Entities.Floor as Floor;
import src.Entities.Scene as Scene;
import src.Entities.Scoreboard as Scoreboard;
import src.Entities.BlockSelect as BlockSelect;
import src.Entities.Chaser as Chaser;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {

			// backgroundColor: "#f00"

		});

		supr(this, 'init', [opts]);

		this.build();

	};

	this.build = function() {

		var runner = new Runner({character:'devil'});
		var chaser = new Chaser({character:'devil'});

		var floor = new Floor();
		var scoreboard = new Scoreboard();
		var scene = new Scene();

		var leftBlockSelect = new BlockSelect({side:'left'});
		var rightBlockSelect = new BlockSelect({side:'right'});

		this.addSubview(scene);
		this.addSubview(floor);
		// this.addSubview(chaser);
		this.addSubview(runner);
		this.addSubview(scoreboard);
		this.addSubview(leftBlockSelect);
		this.addSubview(rightBlockSelect);

		scoreboard.updateScore(123456789);

	};

});