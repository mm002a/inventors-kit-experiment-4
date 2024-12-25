let Duty = 0
basic.forever(function () {
    while (Duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, Duty)
        Duty = Duty + 1
        basic.pause(10)
    }
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(2000)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    while (Duty > 0) {
        pins.analogWritePin(AnalogPin.P0, Duty)
        Duty = Duty - 1
        basic.pause(10)
    }
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
