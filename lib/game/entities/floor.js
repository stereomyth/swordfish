ig.module( 
	'game.entities.floor'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityFloor = ig.Entity.extend({

		size: {x:300, y:300},

		gravityFactor: 0,
		zindex: 10,
		floorLength: 300,
		maxVel: {x:1000,y:0},
		holeName: '',
		holePosition: 0,
		solved: false,
		solid: false,

		collides: ig.Entity.COLLIDES.PASSIVE,

		animSheet: new ig.AnimationSheet( 'media/blox01.png', 300, 300 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.addAnim( 'solid1', 1, [0] );
			this.addAnim( 'shark', 1, [1] );
			this.addAnim( 'swordfish', 1, [2] );
			this.addAnim( 'giraffe', 1, [3] );
			this.addAnim( 'weights', 1, [4] );
			this.addAnim( 'solid2', 1, [5] );
			this.addAnim( 'solid3', 1, [6] );

			if (this.solid === true) {

				switch(Math.floor(Math.random() * 3)) {

					case 0:
						this.holeName = 'solid1';
						this.currentAnim = this.anims.solid1;
					break

					case 1:
						this.holeName = 'solid2';
						this.currentAnim = this.anims.solid2;
					break

					case 2:
						this.holeName = 'solid3';
						this.currentAnim = this.anims.solid3;
					break
					
				}

				this.solved = true;

			} else if (this.solid === false) {

				switch(Math.floor(Math.random() * 4)) {

					case 0:
						this.holeName = 'shark';
						this.currentAnim = this.anims.shark;
						this.holePosition = 60;
					break

					case 1:
						this.holeName = 'giraffe';
						this.currentAnim = this.anims.giraffe;
						this.holePosition = 60;
					break

					case 2:
						this.holeName = 'swordfish';
						this.currentAnim = this.anims.swordfish;
						this.holePosition = 120;
					break

					case 3:
						this.holeName = 'weights';
						this.currentAnim = this.anims.weights;
						this.holePosition = 60;
					break
					
				}

			}

			//console.log(this.holeName);

			this.vel.x = -ig.game.currentSpeed;

		}, 

		update: function () {

			this.parent();

			//this.vel.x -= ig.system.tick * ig.game.speed;

			//this.vel.x = -ig.game.speed;

			//console.log(ig.game.speed)

			if (this.pos.x < -300) {

				this.kill();

				ig.game.spawnFloor();

			}

			if (this.pos.x < (150 - this.holePosition) && !this.solved) {

				//ig.game.player.kill();

				ig.game.gameOver = true;

				ig.game.spawnEntity( EntityGameover, 0, 0);

			}

		}

	});

});
