def setIcon(image: Image):
    global icon
    icon = image

def on_logo_long_pressed():
    if currentApp == 0:
        control.reset()
    else:
        pass
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def kernelstartupInit():
    global currenticon, forever2, icon1, icon2, icon3, icon4, icon5, bootsequenceImage, frameBoot, currentBootimage, currentApp
    radio.set_group(randint(0, 255))
    currenticon = 1
    forever2 = 0
    icon1 = images.create_image("""
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        # . . . .
        """)
    icon2 = images.create_image("""
        . # # . .
        # . . # .
        # . . # .
        . # # # .
        . . . . #
        """)
    icon3 = images.create_image("""
        . # . # .
        # # # # #
        . # . # .
        # # # # #
        . # . # .
        """)
    icon4 = images.create_image("""
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        """)
    icon5 = images.create_image("""
        . # # . .
        . # # # .
        . . . # .
        . # # # .
        . # # . .
        """)
    bootsequenceImage = [images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            . . # . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            . . # # .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            # # . . #
            . . # # .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . #
            # . . # .
            . # # . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . # # .
            . # . . #
            # . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . # # . .
            # . . # .
            . . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            # # . . .
            . . # . .
            . . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            # . . . .
            . # . . .
            . . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            """),
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)]
    frameBoot = 0
    music.play(music.string_playable("A A A A A A G G ", 120),
        music.PlaybackMode.IN_BACKGROUND)
    music.play(music.string_playable("G G G G G G G A ", 120),
        music.PlaybackMode.IN_BACKGROUND)
    music.play(music.string_playable("A A F F F A A A ", 120),
        music.PlaybackMode.IN_BACKGROUND)
    for index in range(13):
        currentBootimage = bootsequenceImage[frameBoot]
        currentBootimage.show_image(0)
        basic.pause(200)
        frameBoot += 1
    setIcon(icon1)
    currentApp = 0

def on_button_pressed_a():
    global currenticon
    if currenticon == 1:
        setIcon(icon5)
        currenticon = 5
    elif currenticon == 2:
        setIcon(icon1)
        currenticon = 1
    elif currenticon == 3:
        setIcon(icon2)
        currenticon = 2
    elif currenticon == 4:
        setIcon(icon3)
        currenticon = 3
    elif currenticon == 5:
        setIcon(icon4)
        currenticon = 4
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global currenticon
    if currenticon == 1:
        setIcon(icon2)
        currenticon = 2
    elif currenticon == 2:
        setIcon(icon3)
        currenticon = 3
    elif currenticon == 3:
        setIcon(icon4)
        currenticon = 4
    elif currenticon == 4:
        setIcon(icon5)
        currenticon = 5
    elif currenticon == 5:
        setIcon(icon1)
        currenticon = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global currentApp
    if currentApp == 0:
        if icon == icon1:
            currentApp = 1
        elif icon == icon2:
            currentApp = 2
        elif icon == icon3:
            currentApp = 3
        elif icon == icon4:
            currentApp = 4
        elif icon == icon5:
            currentApp = 5
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def applicationInit(appId: number):
    if appId == 0:
        while forever2 == 0:
            icon.show_image(0)
    elif appId == 1:
        pass
    else:
        pass
currentBootimage: Image = None
frameBoot = 0
bootsequenceImage: List[Image] = []
icon5: Image = None
icon4: Image = None
icon3: Image = None
icon2: Image = None
icon1: Image = None
forever2 = 0
currenticon = 0
icon: Image = None
currentApp = 0
kernelstartupInit()
applicationInit(0)
while currentApp == 0:
    power.low_power_request(LowPowerMode.CONTINUE)
applicationInit(currentApp)

def on_forever():
    pass
basic.forever(on_forever)
