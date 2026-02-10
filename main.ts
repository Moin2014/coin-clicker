namespace SpriteKind {
    export const upgrade = SpriteKind.create()
    export const upgradeGROß = SpriteKind.create()
    export const Clickpower1 = SpriteKind.create()
    export const Clickpower50 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (maus.overlapsWith(coin)) {
        info.changeScoreBy(click_power)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Clickpower1, function (sprite, otherSprite) {
    game.showLongText("+1 COINS PER CLICK FOR 25 COINS", DialogLayout.Bottom)
    if (info.score() >= 25) {
        click_power += 1
        info.changeScoreBy(-25)
    } else if (info.score() < 25) {
        game.showLongText("!!!NOT ENOUGH COINS!!!", DialogLayout.Bottom)
    }
    pause(500)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    game.reset()
})
controller.combos.attachCombo("ababb", function () {
    click_per_sec = 1000000
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.upgradeGROß, function (sprite, otherSprite) {
    game.showLongText("+10 c/s for 200 coins!", DialogLayout.Bottom)
    if (info.score() >= 200) {
        click_per_sec += 10
        info.changeScoreBy(-200)
    } else if (info.score() < 20) {
        game.showLongText("!!!NOT ENOUGH COINS!!!", DialogLayout.Bottom)
    }
    pause(500)
})
controller.combos.attachCombo("bb", function () {
    game.splash(info.score(), "COINS")
    game.splash(info.highScore(), "HIGHSCORE")
    game.splash(time, "min")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.upgrade, function (sprite, otherSprite) {
    game.showLongText("+1 c/s for 50 coins!", DialogLayout.Bottom)
    if (info.score() >= 50) {
        click_per_sec += 1
        info.changeScoreBy(-50)
    } else if (info.score() < 50) {
        game.showLongText("!!!NOT ENOUGH COINS!!!", DialogLayout.Bottom)
    }
    pause(500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (im_shop == true) {
        coin.setFlag(SpriteFlag.Ghost, true)
        coin.setFlag(SpriteFlag.Invisible, true)
        shop_anzeige.setFlag(SpriteFlag.Invisible, false)
        im_shop = false
    } else if (im_shop == false) {
        coin.setFlag(SpriteFlag.Ghost, false)
        coin.setFlag(SpriteFlag.Invisible, false)
        shop_anzeige.setFlag(SpriteFlag.Invisible, true)
        im_shop = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Clickpower50, function (sprite, otherSprite) {
    game.showLongText("+50 COINS PER CLICK FOR 2500 COINS", DialogLayout.Bottom)
    if (info.score() >= 2500) {
        click_power += 50
        info.changeScoreBy(-2500)
    } else if (info.score() < 2500) {
        game.showLongText("!!!NOT ENOUGH COINS!!!", DialogLayout.Bottom)
    }
    pause(500)
})
let click_power = 0
let shop_anzeige: TextSprite = null
let im_shop = false
let click_per_sec = 0
let time = 0
let coin: Sprite = null
let maus: Sprite = null
scene.setBackgroundColor(5)
let COIN_CLICKR = textsprite.create("COIN CLICKER", 5, 1)
scaling.scaleByPixels(COIN_CLICKR, 45, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleByPixels(COIN_CLICKR, 30, ScaleDirection.Horizontally, ScaleAnchor.Middle)
COIN_CLICKR.setPosition(80, 30)
pause(2000)
tiles.setCurrentTilemap(tilemap`Level1`)
sprites.destroy(COIN_CLICKR)
game.showLongText("PRESS B FOR SHOP      CLICK ON A           PRESS BB TO SHOW ALL STATS ", DialogLayout.Full)
maus = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . c d 5 d c . . . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . . . . c d 5 d c . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(maus)
maus.setStayInScreen(true)
coin = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . f f 1 5 5 5 5 5 4 f f . . . 
    . f 1 1 5 5 5 5 5 5 5 4 4 f . . 
    . f 1 5 5 5 5 5 5 5 5 5 4 f . . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    f 1 5 5 5 5 5 5 5 5 5 5 5 4 f . 
    . f 1 5 5 5 5 5 5 5 5 5 4 f . . 
    . f 1 1 5 5 5 5 5 5 5 4 4 f . . 
    . . f f 1 5 5 5 5 5 4 f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
coin.setPosition(80, 60)
info.setScore(0)
time = 0
click_per_sec = 0
scaling.scaleByPixels(coin, 40, ScaleDirection.Uniformly, ScaleAnchor.Middle)
im_shop = true
shop_anzeige = textsprite.create("SHOP")
shop_anzeige.setPosition(15, 10)
shop_anzeige.setMaxFontHeight(13)
shop_anzeige.setFlag(SpriteFlag.Invisible, true)
let auto_click_mini = sprites.create(img`
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
    `, SpriteKind.upgrade)
auto_click_mini.setFlag(SpriteFlag.Invisible, true)
auto_click_mini.setFlag(SpriteFlag.GhostThroughSprites, true)
auto_click_mini.setPosition(80, 20)
scaling.scaleByPixels(auto_click_mini, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let auto_click_groß = sprites.create(img`
    ...bbbbbbbbbb...
    ..b1111111111b..
    .b111111111111b.
    .b111111111111b.
    .bddccccccccddb.
    .bdc66666666cdb.
    .bdc61d66666cdb.
    .bdc6d666666cdb.
    .bdc66666666cdb.
    .bdc66666666cdb.
    .bdc66666666cdb.
    .bddccccccccddb.
    .cbbbbbbbbbbbbc.
    fccccccccccccccf
    fbbbbbbbbbbbbbbf
    fbcdddddddddddbf
    fbcbbbbbbbbbbcbf
    fbcbbbbbbbbbbcbf
    fbccccccccccccbf
    fbbbbbbbbbbbbbbf
    fbffffffffffffbf
    ffffffffffffffff
    `, SpriteKind.upgradeGROß)
auto_click_groß.setFlag(SpriteFlag.Invisible, false)
auto_click_mini.setFlag(SpriteFlag.GhostThroughSprites, false)
auto_click_groß.setPosition(115, 20)
scaling.scaleByPixels(auto_click_groß, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let click_power_1 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .........bb.........
    ........cccc........
    ........cccc........
    .........ff.........
    .........cf.........
    .........cc.........
    ........cccc........
    .......cbbccc.......
    .......cbcccc.......
    .......cccccc.......
    .......cccccf.......
    ........cfff........
    ....................
    ....................
    `, SpriteKind.Clickpower1)
click_power_1.setFlag(SpriteFlag.Invisible, true)
click_power_1.setFlag(SpriteFlag.GhostThroughSprites, true)
scaling.scaleByPixels(click_power_1, 15, ScaleDirection.Uniformly, ScaleAnchor.Middle)
click_power_1.setPosition(10, 100)
click_power = 1
let click_power_50 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........2222........
    ........2d22........
    .......2d2222.......
    .......d22222.......
    .......222222.......
    .......222222.......
    .......222222.......
    .......222222.......
    ........2222........
    ........4444........
    ....................
    `, SpriteKind.Clickpower50)
click_power_50.setPosition(30, 100)
scaling.scaleByPixels(click_power_50, 15, ScaleDirection.Uniformly, ScaleAnchor.Middle)
click_power_50.setFlag(SpriteFlag.Invisible, true)
click_power_50.setFlag(SpriteFlag.GhostThroughSprites, true)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(click_per_sec)
})
game.onUpdateInterval(60000, function () {
    time += 1
})
forever(function () {
    maus.z = 10
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
forever(function () {
    if (im_shop == true) {
        auto_click_mini.setFlag(SpriteFlag.Invisible, true)
        auto_click_mini.setFlag(SpriteFlag.GhostThroughSprites, true)
    }
})
forever(function () {
    if (im_shop == false) {
        auto_click_mini.setFlag(SpriteFlag.Invisible, false)
        auto_click_mini.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
})
forever(function () {
    if (im_shop == true) {
        auto_click_groß.setFlag(SpriteFlag.Invisible, true)
        auto_click_groß.setFlag(SpriteFlag.GhostThroughSprites, true)
    }
})
forever(function () {
    if (im_shop == false) {
        auto_click_groß.setFlag(SpriteFlag.Invisible, false)
        auto_click_groß.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
})
forever(function () {
    if (im_shop == true) {
        click_power_1.setFlag(SpriteFlag.Invisible, true)
        click_power_1.setFlag(SpriteFlag.GhostThroughSprites, true)
    }
})
forever(function () {
    if (im_shop == false) {
        click_power_1.setFlag(SpriteFlag.Invisible, false)
        click_power_1.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
})
forever(function () {
    if (im_shop == false) {
        click_power_50.setFlag(SpriteFlag.Invisible, false)
        click_power_50.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
})
forever(function () {
    if (im_shop == true) {
        click_power_50.setFlag(SpriteFlag.Invisible, true)
        click_power_50.setFlag(SpriteFlag.GhostThroughSprites, true)
    }
})
