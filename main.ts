let strip: neopixel.Strip = null
let Distance = 0
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.setBrightness(10)
    Distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(Distance)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    if (Distance < 10) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        basic.pause(200)
        music.playTone(262, music.beat(BeatFraction.Whole))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
    }
})
