ig.module( 
	'game.entities.backdrop'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityBackdrop = ig.Entity.extend({

		size: {x:1200, y:700},
		collides: ig.Entity.COLLIDES.NONE,
		scrollSpeed: 0,
		gravityFactor: 0,
		backgroundImage: 1,

		animSheet: new ig.AnimationSheet( 'media/bg01.png', 1200, 700 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.animSheet = new ig.AnimationSheet( 'media/' + this.bgNum + '.png', 1200, 700 );

			this.addAnim( 'idle', 1, [0] );

		}, 

		update: function () {

			this.parent();

			//this.vel.x = -this.scrollSpeed;

			//this.pos.x = ig.game.screen.x

		},

	});

});
