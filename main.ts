input.onButtonPressed(Button.A, function () {
    if (Action) {
        Hammer_1.set(LedSpriteProperty.X, 4)
        if (Player_sign_1 >= Player_sign_2) {
            Action = false
            P1score += 1
            music.playMelody("D E G C5 D E G C5 ", 500)
        } else {
            music.playTone(392, music.beat(BeatFraction.Half))
        }
    }
})
function Title () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # . # # #
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
}
function Intro () {
    basic.showLeds(`
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        `)
    music.playMelody("E F G A G C - C ", 500)
    music.playMelody("- C - C - C - C ", 500)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F E C D G A C5 B ", 500)
    }
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        # . . . .
        # . . . .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F F D C G A C5 B ", 500)
    }
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        # . # . #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F E C D G A C5 B ", 500)
    }
    basic.showLeds(`
        . # # # .
        . . # . .
        # # # # #
        # . . . #
        # . # . #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F F D C G A C5 B ", 500)
    }
    basic.showLeds(`
        . # # . .
        . . # . #
        # # # . #
        # . . . .
        # . # . .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F D F G B C5 B G ", 500)
    }
    basic.showLeds(`
        . . . . .
        # # # . #
        # # # . #
        # # # . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F E F G B C5 B G ", 500)
    }
    basic.showLeds(`
        . . . . #
        . # # . #
        . # # . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F D F G B C5 B G ", 500)
    }
    basic.showLeds(`
        # . # # .
        # . . . #
        . # . . .
        . . # # #
        # # . . #
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F C F G B C5 B G ", 500)
    }
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        # . # . #
        # . . . #
        `)
    music.playMelody("B C5 A B G A F G ", 500)
    music.playMelody("E F D E C D - - ", 500)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (Action) {
        Player1.set(LedSpriteProperty.Y, 3)
        if (Player_sign_1 <= Player_sign_2) {
            Action = false
            P1score += 1
            music.playMelody("D E G C5 D E G C5 ", 500)
        } else {
            music.playTone(392, music.beat(BeatFraction.Half))
        }
    }
})
let Bar_3: game.LedSprite = null
let Bar_2: game.LedSprite = null
let Bar_1: game.LedSprite = null
let Player_sign_2 = 0
let Player_sign_1 = 0
let Hammer_1: game.LedSprite = null
let Player1: game.LedSprite = null
let Action = false
Action = false
Intro()
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.AB)) {
        break;
    } else {
        Title()
    }
}
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
    `)
music.playMelody("F G A E F - F - ", 500)
basic.showString("Player start")
Player1 = game.createSprite(0, 4)
let Player2 = game.createSprite(4, 4)
let Hammer_2 = game.createSprite(3, 4)
Hammer_1 = game.createSprite(1, 4)
Player1.set(LedSpriteProperty.Brightness, 180)
Player2.set(LedSpriteProperty.Brightness, 180)
Hammer_1.set(LedSpriteProperty.Brightness, 90)
Hammer_2.set(LedSpriteProperty.Brightness, 90)
let P2score = 0
let P1score = 0
game.setScore(0)
basic.forever(function () {
    if (P1score == 9) {
        basic.showString("P1win!")
        P1score = 0
        P2score = 0
        game.addScore(1)
    } else if (P2score == 9) {
        basic.showString("P1lose")
        P1score = 0
        P2score = 0
        game.gameOver()
    } else {
        basic.showString("" + P1score + "|" + P2score)
    }
    Hammer_1.set(LedSpriteProperty.Blink, 1000)
    Hammer_2.set(LedSpriteProperty.Blink, 1000)
    for (let index = 0; index < 4; index++) {
        music.playTone(659, music.beat(BeatFraction.Quarter))
        basic.pause(1000)
    }
    Hammer_1.set(LedSpriteProperty.Blink, 0)
    Hammer_2.set(LedSpriteProperty.Blink, 0)
    Bar_1 = game.createSprite(2, 2)
    Bar_2 = game.createSprite(2, 1)
    Bar_3 = game.createSprite(2, 0)
    music.playTone(494, music.beat(BeatFraction.Quarter))
    basic.pause(1000)
    Bar_3.delete()
    music.playTone(494, music.beat(BeatFraction.Quarter))
    basic.pause(1000)
    Bar_2.delete()
    music.playTone(494, music.beat(BeatFraction.Quarter))
    basic.pause(1000)
    Bar_1.delete()
    music.playTone(988, music.beat(BeatFraction.Whole))
    Player_sign_1 = randint(0, 9)
    Player_sign_2 = randint(0, 9)
    basic.showString("" + Player_sign_1 + "|" + Player_sign_2)
    Action = true
    basic.pause(1250)
    if (Action) {
        if (Math.randomBoolean()) {
            if (Player_sign_1 <= Player_sign_2) {
                Hammer_2.set(LedSpriteProperty.X, 0)
                P2score += 1
                music.playTone(784, music.beat(BeatFraction.Half))
            } else {
                Hammer_2.set(LedSpriteProperty.X, 0)
            }
        } else {
            if (Player_sign_1 >= Player_sign_2) {
                Player2.set(LedSpriteProperty.Y, 3)
                P2score += 1
                music.playTone(784, music.beat(BeatFraction.Half))
            } else {
                Player2.set(LedSpriteProperty.Y, 3)
            }
        }
    }
    Action = false
    basic.pause(1000)
    Player1.set(LedSpriteProperty.Y, 4)
    Player2.set(LedSpriteProperty.Y, 4)
    Hammer_2.set(LedSpriteProperty.X, 3)
    Hammer_1.set(LedSpriteProperty.X, 1)
})
