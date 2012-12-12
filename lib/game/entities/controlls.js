ig.module( 
	'game.entities.controlls'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityControlls = ig.Entity.extend({

		size: {x:520, y:190},
		collides: ig.Entity.COLLIDES.NONE,
		gravityFactor: 0,

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.animSheet = new ig.AnimationSheet( 'media/cont.png', 520, 190 );

			this.addAnim( 'idle', 1, [0] );


		}, 

		update: function () {

			this.parent();

		},

	});

});
