import Phaser from 'phaser'

import CoronaBusterScene from './Scenes/coronaBusterScene'
import GameOver from './Scenes/GameOver'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [CoronaBusterScene, GameOver],
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
}

export default new Phaser.Game(config)
