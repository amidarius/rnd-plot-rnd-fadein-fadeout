basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), 2 ** randint(1, 8) - 1)
        led.plotBrightness(randint(0, 4), randint(0, 4), 0)
        basic.pause(10)
    }
})
