import AudioManager;

exports.sound = null;

/* Initialize the audio files if they haven't been already.
*/
exports.getSound = function () {
	if (!exports.sound) {
		exports.sound = new AudioManager({
			path: 'resources/sound',
			files: {
				loop: {
					volume: 0.2,
					background: true,
					loop: true
				},
				scream: {
					background: false
				},
				punch: {
					background: false,
					volume: 0.3,
				},
				bulb: {
					background: false,
					volume: 0.5,
				},
				alien: {
					background: false,
					volume: 0.3,
					loop: true,
				},
				boom: {
					background: false,
					volume: 0.5,
				}
			}
		});
	}
	return exports.sound;
};
