namespace SpriteKind {
    export const None = SpriteKind.create()
}
function deide3 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(randint(5, 155), 120)
    sideatack_1.setVelocity(0, -50)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function side4 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(160, randint(5, 155))
    sideatack_1.setVelocity(-50, 0)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function side2 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(randint(5, 155), 0)
    sideatack_1.setVelocity(0, 50)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function side1 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(0, randint(5, 155))
    sideatack_1.setVelocity(50, 0)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let side = 0
let sideatack_1: Sprite = null
let The_Entity = sprites.create(assets.image`The Entity`, SpriteKind.None)
scene.setBackgroundColor(12)
let character = sprites.create(img`
    . . . . 
    . 7 7 . 
    . 7 7 . 
    . . . . 
    `, SpriteKind.Player)
character.setStayInScreen(true)
controller.moveSprite(character, 55, 55)
info.setScore(0)
game.onUpdateInterval(50, function () {
    side = randint(1, 4)
    if (side == 1) {
        side1()
    }
    if (side == 2) {
        side2()
    }
    if (side == 3) {
        deide3()
    }
    if (side == 4) {
        side4()
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
