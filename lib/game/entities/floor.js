ig.module( 
	'game.entities.floor'
)
.requires(
	'impact.entity'
)
.defines(function(){	

	EntityFloor = ig.Entity.extend({

		size: {x:300, y:300},

		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		gravityFactor: 0,
		floorLength: 300,
		holeName: '',
		holePosition: 0,

		collides: ig.Entity.COLLIDES.PASSIVE,

		animSheet: new ig.AnimationSheet( 'media/blox01.png', 300, 300 ),

		init: function ( x, y, settings ) {

			this.parent ( x, y, settings);

			this.addAnim( 'solid1', 1, [0] );
			this.addAnim( 'solid2', 1, [5] );
			this.addAnim( 'solid3', 1, [6] );
			this.addAnim( 'shark', 1, [1] );
			this.addAnim( 'giraffe', 1, [3] );
			this.addAnim( 'swordfish', 1, [2] );
			this.addAnim( 'weights', 1, [4] );

			switch(Math.floor(Math.random() * 5)) {

				case 0:
					this.holeName = 'solid1';
					this.currentAnim = this.anims.solid1;
				break

				case 1:
					this.holeName = 'shark';
					this.currentAnim = this.anims.shark;
					this.holePosition = 60;
				break

				case 2:
					this.holeName = 'giraffe';
					this.currentAnim = this.anims.giraffe;
					this.holePosition = 60;
				break

				case 3:
					this.holeName = 'swordfish';
					this.currentAnim = this.anims.swordfish;
					this.holePosition = 120;
				break

				case 4:
					this.holeName = 'weights';
					this.currentAnim = this.anims.weights;
					this.holePosition = 60;
				break

				case 5:
					this.holeName = 'solid2';
					this.currentAnim = this.anims.solid2;
				break

				case 6:
					this.holeName = 'solid3';
					this.currentAnim = this.anims.solid3;
				break
				
			}
			console.log(this.holeName);
			

		}, 

		update: function () {

			this.parent();

		}

	});

});
