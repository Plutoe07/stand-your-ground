namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
    export const enemy5 = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.enemy5, SpriteKind.Projectile, function (sprite, otherSprite) {
    enemy5.destroy(effects.fire, 500)
    myDart.sprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", z, function () {
        myDart = darts.create(assets.image`bullet`, SpriteKind.Projectile, 81, 69)
        myDart.angle = -1 * transformSprites.getRotation(mySprite)
        myDart.throwDart()
    })
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    transformSprites.changeRotation(mySprite, 10)
})
sprites.onOverlap(SpriteKind.enemy3, SpriteKind.Player, function (sprite, otherSprite) {
    enemy3.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    myEnemy.destroy(effects.fire, 500)
    myDart.sprite.destroy()
    info.changeScoreBy(1)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    Boss.setVelocity(0, 0)
    scaling.scaleToPercent(Boss, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    pause(200)
    scaling.scaleToPercent(Boss, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    pause(200)
    scaling.scaleToPercent(Boss, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Boss.destroy(effects.fire, 2000)
    pause(2000)
    game.over(true, effects.melt)
})
sprites.onOverlap(SpriteKind.enemy4, SpriteKind.Projectile, function (sprite, otherSprite) {
    enemy4.destroy(effects.fire, 500)
    myDart.sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    enemy2.destroy(effects.fire, 500)
    myDart.sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.enemy3, SpriteKind.Projectile, function (sprite, otherSprite) {
    enemy3.destroy(effects.fire, 500)
    myDart.sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    myEnemy.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    enemy2.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.enemy5, SpriteKind.Player, function (sprite, otherSprite) {
    enemy5.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.enemy4, SpriteKind.Player, function (sprite, otherSprite) {
    enemy4.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    myDart.sprite.destroy()
    statusbar2.value += -5
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    transformSprites.changeRotation(mySprite, -10)
})
let enemy2: Sprite = null
let enemy4: Sprite = null
let myEnemy: Sprite = null
let enemy3: Sprite = null
let myDart: Dart = null
let enemy5: Sprite = null
let statusbar2: StatusBarSprite = null
let Boss: Sprite = null
let z = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`dessert_street`)
mySprite = sprites.create(assets.image`turret`, SpriteKind.Player)
mySprite.setPosition(81, 69)
info.setScore(0)
info.setLife(3)
controller.configureRepeatEventDefaults(100, 30)
let x = 2000
let y = 35
z = 400
let numb1 = 1
let numb2 = 5
timer.after(30000, function () {
    game.splash("Rampage Time", "Unlimited firerate")
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy3)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy4)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy5)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    x = 1000
    y = 45
    z = 0
})
timer.after(60000, function () {
    game.splash("Boss Time")
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy3)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy4)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy5)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    z = 500
    numb1 = 0
    numb2 = 0
    Boss = sprites.create(assets.image`zombie`, SpriteKind.Boss)
    scaling.scaleToPercent(Boss, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Boss.setPosition(78, 29)
    statusbar2 = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(Boss, -10, 1)
    statusbar2.value = 100
    for (let index = 0; index < 1; index++) {
        Boss.setVelocity(50, 0)
        timer.after(1000, function () {
            for (let index = 0; index < 10; index++) {
                if (statusbar2.value > 0) {
                    Boss.setVelocity(-50, 0)
                    pause(2000)
                    Boss.setVelocity(50, 0)
                    pause(2000)
                }
            }
        })
    }
})
forever(function () {
    pause(x)
    if (randint(numb1, numb2) == 1) {
        myEnemy = sprites.create(assets.image`zombie`, SpriteKind.Enemy)
        myEnemy.follow(mySprite, y)
        myEnemy.setPosition(159, 69)
    } else if (randint(numb1, numb2) == 2) {
        enemy2 = sprites.create(assets.image`zombie`, SpriteKind.enemy2)
        enemy2.follow(mySprite, y)
        enemy2.setPosition(96, 13)
    } else if (randint(numb1, numb2) == 3) {
        enemy3 = sprites.create(assets.image`zombie`, SpriteKind.enemy3)
        enemy3.follow(mySprite, y)
        enemy3.setPosition(0, 81)
    } else if (randint(numb1, numb2) == 4) {
        enemy4 = sprites.create(assets.image`zombie`, SpriteKind.enemy4)
        enemy4.follow(mySprite, y)
        enemy4.setPosition(114, 113)
    } else if (randint(numb1, numb2) == 5) {
        enemy5 = sprites.create(assets.image`zombie`, SpriteKind.enemy5)
        enemy5.follow(mySprite, y)
        enemy5.setPosition(22, 12)
    }
})
