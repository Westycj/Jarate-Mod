const AmmoLiquids = require('const')
const status = require('const')

Blocks.wave.ammoTypes.put(AmmoLiquids.surgeSlurry, Object.assign(new LiquidBulletType(AmmoLiquids.surgeSlurry), {
	knockback: 0.55,
	drag: 0.001,
	pierce: true,
	damage: 2
}))
Blocks.tsunami.ammoTypes.put(AmmoLiquids.surgeSlurry, Object.assign(new LiquidBulletType(AmmoLiquids.surgeSlurry), {
	lifetime: 49,
	speed: 4,
	pierce: true,
	knockback: 1.3,
	puddleSize: 8,
	orbSize: 4,
	drag: 0.001,
	status: status.jarated,
	statusDuration: 240,
	ammoMultiplier: 0.4,
	damage: 2.25
}))