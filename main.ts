namespace SpriteKind {
    export const Decoration = SpriteKind.create()
    export const Parent = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Son,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(football, effects.confetti, 100)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-1)
    sprites.destroy(football)
})
let football: Sprite = null
let Son: Sprite = null
tiles.setCurrentTilemap(tilemap`level10`)
Son = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Son)
Son.setPosition(79, 120)
Son.setStayInScreen(true)
let myDecor = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Decoration)
myDecor.setPosition(15, 55)
myDecor = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Decoration)
myDecor.setPosition(126, 22)
info.setLife(5)
let Dad = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Parent)
Dad.setPosition(77, 7)
game.onUpdateInterval(1500, function () {
    football = sprites.createProjectileFromSprite(img`
        . . c 6 . . 
        . c b d 6 . 
        c b b 4 d 6 
        c b 4 4 d 6 
        c 4 4 4 4 6 
        c d 4 4 4 6 
        . c d d 6 . 
        . . c 6 . . 
        `, Dad, randint(15, 115), 100)
    animation.runImageAnimation(
    football,
    [img`
        . . 6 c . . . . 
        . 6 d d c . . . 
        6 4 4 4 4 c . . 
        6 4 4 4 1 c . . 
        6 4 4 4 1 c . . 
        6 d 4 b b c . . 
        . 6 d 1 c . . . 
        . . 6 c . . . . 
        `,img`
        . . 6 c . . . . 
        . 6 4 d c . . . 
        6 4 4 4 1 c . . 
        6 4 4 1 4 c . . 
        6 4 4 1 b c . . 
        6 1 4 b b c . . 
        . 6 d b c . . . 
        . . 6 c . . . . 
        `],
    500,
    true
    )
})
