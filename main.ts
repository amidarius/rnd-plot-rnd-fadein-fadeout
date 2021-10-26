basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), randint(0, 32) * 8)
        led.plotBrightness(randint(0, 4), randint(0, 4), 0)
        basic.pause(20)
    }
})
