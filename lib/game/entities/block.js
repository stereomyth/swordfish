ig.module( 
	'game.entities.block'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityBlock = ig.Entity.extend({

		size: {x:300, y:300},
		maxVel: {x:0, y:3000},
		gravityFactor: 100,
		zIndex: -1,

		collides: ig.Entity.COLLIDES.NONE,

		animSheet: new ig.AnimationSheet( 'media/slotBlox.png', 300, 300 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.addAnim( 'weight', 1, [0] );
			this.addAnim( 'giraffe', 1, [1] );
			this.addAnim( 'swordfish', 1, [2] );
			this.addAnim( 'shark', 1, [3] );

			//console.log(this.number)

			switch (this.chosenBlox) {

				case 'weight':
					this.currentAnim = this.anims.weight;
				break

				case 'giraffe':
					this.currentAnim = this.anims.giraffe;
				break

				case 'swordfish':
					this.currentAnim = this.anims.swordfish;
				break

				case 'shark':
					this.currentAnim = this.anims.shark;
				break

			}


		}, 

		update: function () {

			this.parent();

			this.pos.x = this.parentFloor.pos.x + this.parentFloor.holePosition;

			if(this.pos.y >= this.parentFloor.pos.y && this.slotBlock === this.chosenBlox) {

				this.pos.y = this.parentFloor.pos.y;

				this.gravityFactor = 0;

				this.parentFloor.solved = true;

			}

			if (this.pos.x < -300 || this.pos.y > 700 ) {

				this.kill();

			}

		}

	});

});
