ig.module( 
	'game.entities.backdrop'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityBackdrop = ig.Entity.extend({

		size: {x:2400, y:700},
		collides: ig.Entity.COLLIDES.NONE,
		gravityFactor: 0,
		backgroundImage: 1,
		birthed: false,
		maxVel:{x:1000,y:0},

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.animSheet = new ig.AnimationSheet( 'media/' + this.bgNum + '.png', 2400, 700 );

			this.addAnim( 'idle', 1, [0] );

			this.vel.x = this.scrollSpeed;

		}, 

		update: function () {

			this.parent();

			//this.vel.x += ig.system.tick * this.speed;

			if (this.pos.x < -1200 && !this.birthed) {

				ig.game.spawnEntity( EntityBackdrop, this.pos.x + 2400, 0, {bgNum:this.bgNum, scrollSpeed: this.scrollSpeed, zIndex: this.zIndex} );

				this.birthed = true;

				ig.game.sortEntitiesDeferred();

			}

			if (this.pos.x < -2450) {

				this.kill();

			}

			//this.vel.x = -this.scrollSpeed;

			//this.pos.x = ig.game.screen.x

		},

	});

});
