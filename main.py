def SetDirection(udx: number, udy: number, Direction2: number):
    if udy == 0:
        y0[udx] = Direction2
    elif udy == 1:
        y1[udx] = Direction2
    elif udy == 2:
        y2[udx] = Direction2
    elif udy == 3:
        y3[udx] = Direction2
    elif udy == 4:
        y4[udx] = Direction2

def CheckDirection(udx2: number, udy2: number):
    if udy2 == 0:
        return y0[udx2]
    elif udy2 == 1:
        return y1[udx2]
    elif udy2 == 2:
        return y2[udx2]
    elif udy2 == 3:
        return y3[udx2]
    elif udy2 == 4:
        return y4[udx2]
    return 0

b = 0
y = 0
x = 0

y4: List[number] = []
y3: List[number] = []
y2: List[number] = []
y1: List[number] = []
y0: List[number] = []

led.set_brightness(255)

y0 = [0, 4]
y1 = [0, 4]
y2 = [0, 4]
y3 = [0, 4]
y4 = [0, 4]

for xi in range(5):
    y0[xi] = randint(0, 64)
    y1[xi] = randint(0, 64)
    y2[xi] = randint(0, 64)
    y3[xi] = randint(0, 64)
    y4[xi] = randint(0, 64)

for xi2 in range(5):
    for yi in range(5):
        led.plot_brightness(0, 0, 0)

def on_forever():
    global x, y, b
    
    for index in range(255):
        
        x = randint(0, 4)
        y = randint(0, 4)
        b = led.point_brightness(x, y)
        
        if b == CheckDirection(x, y):
            SetDirection(x, y, 0)
        elif b == 0:
            SetDirection(x, y, randint(0, 64))
        
        if CheckDirection(x, y) > 0:
            led.plot_brightness(x, y, b + 1)
        else:
            led.plot_brightness(x, y, b - 1)
        
        basic.pause(0)

basic.forever(on_forever)
