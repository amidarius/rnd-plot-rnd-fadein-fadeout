function SetDirection (udx: number, udy: number, Direction2: number) {
    if (udy == 0) {
        y0[udx] = Direction2
    } else if (udy == 1) {
        y1[udx] = Direction2
    } else if (udy == 2) {
        y2[udx] = Direction2
    } else if (udy == 3) {
        y3[udx] = Direction2
    } else if (udy == 4) {
        y4[udx] = Direction2
    }
}
function CheckDirection (udx2: number, udy2: number) {
    if (udy2 == 0) {
        return y0[udx2]
    } else if (udy2 == 1) {
        return y1[udx2]
    } else if (udy2 == 2) {
        return y2[udx2]
    } else if (udy2 == 3) {
        return y3[udx2]
    } else if (udy2 == 4) {
        return y4[udx2]
    }
    return 0
}
let b = 0
let y = 0
let x = 0
let y4: number[] = []
let y3: number[] = []
let y2: number[] = []
let y1: number[] = []
let y0: number[] = []
y0 = [0, 4]
y1 = [0, 4]
y2 = [0, 4]
y3 = [0, 4]
y4 = [0, 4]
for (let xi = 0; xi <= 4; xi++) {
    for (let yi = 0; yi <= 4; yi++) {
        led.plotBrightness(xi, yi, 0)
    }
}
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        x = randint(0, 4)
        y = randint(0, 4)
        b = led.pointBrightness(x, y)
        if (b == 0) {
            SetDirection(x, y, randint(0, 64))
        } else if (b >= CheckDirection(x, y)) {
            SetDirection(x, y, 0)
        }
        if (CheckDirection(x, y) > 0) {
            led.plotBrightness(x, y, b + 2)
        } else {
            led.plotBrightness(x, y, b - 2)
        }
        basic.pause(0)
    }
})
