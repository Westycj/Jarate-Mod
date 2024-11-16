const jarated = new StatusEffect("jarated")

jarated.color = Color.valueOf("ffe483")
jarated.healthMultiplier = 0.65
jarated.effect = Fx.absorb

exports.jarated = jarated

const surgeSlurry = new Liquid("surge-slurry", Color.valueOf("ffe483"))

exports.surgeSlurry = surgeSlurry

const jarate = new Item("jarate")
