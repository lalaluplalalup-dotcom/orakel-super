let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.soundLevel() >= 30) {
        strip.showRainbow(1, 360)
        for (let index = 0; index < 120; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(50)
        }
    }
})
basic.forever(function () {
    if (input.soundLevel() >= 30) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        if (randint(0, 1) == 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.showString("nein")
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.showString("ja")
        }
    }
})
