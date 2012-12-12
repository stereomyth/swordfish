ig.module( 
	'game.entities.runner'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityRunner = ig.Entity.extend({

		size: {x:100, y:100},
		//maxVel: {x: 150, y: 300},
	    //friction: {x: 600, y:0},
	    //speed: 300,
	    bounciness: 0.2,
		type: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.ACTIVE,


		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			switch(Math.floor(Math.random() * 2)) {

				case 0:

					this.animSheet = new ig.AnimationSheet( 'media/toiletSprites.png', 100, 100 );

					this.addAnim( 'idle', 0.04, [0,1,2,3,4,5,6] );

				break

				case 1:

					this.animSheet = new ig.AnimationSheet( 'media/devilSprites.png', 100, 100 );

					this.addAnim( 'idle', 0.03, [0,1,2,3,4,5,6,7] );

				break

			}

		}, 

		update: function () {

			this.parent();

		},

		kill: function() {

			this.currentAnim = this.anims.explode;

		}

	});

});
