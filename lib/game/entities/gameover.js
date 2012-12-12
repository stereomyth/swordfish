ig.module( 
	'game.entities.gameover'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityGameover = ig.Entity.extend({

		size: {x:1200, y:700},
		collides: ig.Entity.COLLIDES.NONE,
		gravityFactor: 0,

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.animSheet = new ig.AnimationSheet( 'media/gameOverScreen01.png', 1200, 700 );

			this.addAnim( 'idle', 1, [0] );


		}, 

		update: function () {

			this.parent();

		},

	});

});
