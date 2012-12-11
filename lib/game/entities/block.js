ig.module( 
	'game.entities.block'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityBlock = ig.Entity.extend({

		size: {x:300, y:300},

		collides: ig.Entity.COLLIDES.NONE,

		animSheet: new ig.AnimationSheet( 'media/slotBlox.png', 300, 300 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.addAnim( 'weight', 1, [0] );
			this.addAnim( 'giraffe', 1, [1] );
			this.addAnim( 'swordfish', 1, [2] );
			this.addAnim( 'shark', 1, [3] );

			switch (this.slotBlock) {

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

			if(this.pos.y >= this.parentFloor.pos.y) {

				this.pos.y = this.parentFloor.pos.y;

				this.gravityFactor = 0;

			}

		}

	});

});
