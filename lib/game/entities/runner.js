ig.module( 
	'game.entities.runner'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityRunner = ig.Entity.extend({

		size: {x:10, y:10},
		maxVel: {x: 50, y: 300},
	    friction: {x: 600, y:0},
	    speed: 300,
	    bounciness: 0.2,

		collides: ig.Entity.COLLIDES.PASSIVE,

		animSheet: new ig.AnimationSheet( 'media/runman.png', 10, 10 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.addAnim( 'idle', 0.2, [0,1,2] );
			this.addAnim( 'jump', 0.2, [7,8,9,10]);
			this.addAnim( 'fall', 0.2, [13,14,15,16]);

		}, 

		update: function () {

			if (this.standing) {

				this.currentAnim = this.anims.idle;

			} else {

				this.currentAnim = this.anims.fall;

			}

			if ( ig.input.state('left') ) {

            	this.accel.x = -this.speed;

	        } else if ( ig.input.state('right') ) {

	            this.accel.x = this.speed;

	        } else {

	            this.accel.x = 0;

	        }

	        if ( ig.input.state('jump') ) {

	        	this.accel.y = -this.speed * 3;

	        } else {

	        	this.accel.y = 0;

	        }

			//this.vel.y = 150;

			this.parent();

		}

	});

});
