ig.module( 
	'game.entities.floor'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityFloor = ig.Entity.extend({

		size: {x:100, y:100},

		collides: ig.Entity.COLLIDES.FIXED,

		animSheet: new ig.AnimationSheet( 'media/floor1.png', 100, 100 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.addAnim( 'idle', 1, [0] );

			this.vel.x = -50;

			this.gravityFactor = 0;


		}, 

		update: function () {

			if ( this.pos.x < -150 ) {

				//console.log('kill');

				this.kill();

			}

			this.parent();

		}

	});

});
