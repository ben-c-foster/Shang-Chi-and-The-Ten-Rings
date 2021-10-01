namespace SpriteKind {
    export const Ring = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`blank`)
    tiles.setTilemap(tilemap`level6`)
    game.splash("IT LOOKS LIKE YOU COLLECTED ALL OF THE TEN RINGS AND WON GOOD JOB")
    game.over(true)
})
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    animation.loopFrames2(
    sprite,
    assets.animation`assassin left`,
    125,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    sprite.follow(mySprite, 30)
    sprite.ay = 500
    animation.loopFrames2(
    sprite,
    assets.animation`assassin right`,
    125,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pit`, function (sprite, location) {
    game.reset()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`energy`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.gravity_jump(mySprite)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.wall_jump(sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door2`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level5`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    game.level_num(3)
    info.setLife(3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ring`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    music.baDing.play()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`power kick`, mySprite, 50, 50)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    projectile.lifespan = 110
    animation.runImageAnimation(
    mySprite,
    assets.animation`sc kick`,
    150,
    false
    )
})
info.onLifeZero(function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`boulder`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.knock.play()
})
controller.combos.attachCombo("udlr", function () {
    info.setLife(3)
})
controller.combos.attachSpecialCode(function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    music.knock.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door1`, function (sprite, location) {
    info.setLife(3)
    info.changeLifeBy(2)
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    game.level_num(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`rubble`)
    info.changeLifeBy(-1)
    animation.runImageAnimation(
    mySprite,
    assets.animation`sc damage`,
    200,
    false
    )
})
let projectile: Sprite = null
let mySprite: Sprite = null
let CHEATED = 2
game.splash("HELLO SHANG CHI USE THE KEYS TO MOVE LEFT TO RIGHT. AND A TO JUMP. DOWN KEY TO ATTACK. AND B TO HOVER")
info.changeLifeBy(2)
info.setLife(5)
scene.setBackgroundImage(assets.image`background1`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Shang-Chi`, SpriteKind.Player)
sprites.add_profile(Choice.shang)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
animation.loopFrames2(
mySprite,
assets.animation`sc walk right`,
100,
characterAnimations.rule(Predicate.MovingRight)
)
animation.loopFrames2(
mySprite,
assets.animation`sc walk left`,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
animation.loopFrames2(
mySprite,
assets.animation`sc jump`,
125,
characterAnimations.rule(Predicate.MovingUp)
)
tiles.createSpritesOnTiles(assets.tile`rubble`, SpriteKind.Enemy)
forever(function () {
	
})
