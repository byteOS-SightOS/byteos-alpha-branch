function collides (x: number, y: number) {
    for (let r = 0; r <= piece.length - 1; r++) {
        for (let c = 0; c <= piece[r].length - 1; c++) {
            if (piece[r][c] == 1) {
                nx = x + c
                ny = y + r
                if (nx < 0 || nx >= W || ny >= H) {
                    return true
                }
                if (ny >= 0 && board[ny][nx] == 1) {
                    return true
                }
            }
        }
    }
    return false
}
function resetGame () {
    obstacles = []
    playerY = 4
    velocity = 0
    tick = 0
}
function setIcon (image: Image) {
    icon = image
}
function storeUnusedcodehere () {
	
}
function kernelstartupInit () {
    radio.setGroup(randint(0, 255))
    currenticon = 1
    forever2 = 0
    icon1 = images.createImage(`
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        # . . . .
        `)
    icon2 = images.createImage(`
        . # # # .
        . . # . .
        . . . . #
        # . . # #
        # # # # #
        `)
    icon3 = images.createImage(`
        . # . # .
        # # # # #
        . # . # .
        # # # # #
        . # . # .
        `)
    icon4 = images.createImage(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    icon5 = images.createImage(`
        . . # . #
        # # # # .
        # # # # #
        # # # # .
        . . # . #
        `)
    icon6 = images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    bootsequenceImage = [
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        . . # . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        . . # # .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # # . . #
        . . # # .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . #
        # . . # .
        . # # . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . # #
        . . # . .
        # # . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # # .
        . # . . #
        # . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . # # . .
        # . . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # # . . .
        . . # . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    ]
    frameBoot = 0
    music.play(music.stringPlayable("A A G G G A F A ", 65), music.PlaybackMode.InBackground)
    for (let index = 0; index < 13; index++) {
        currentBootimage = bootsequenceImage[frameBoot]
        currentBootimage.showImage(0)
        basic.pause(200)
        frameBoot += 1
    }
    bootsequenceImage = []
    setIcon(icon1)
    currentApp = 0
}
function clearLines () {
    for (let y2 = H - 1; y2 >= 0; y2--) {
        let full = true
        for (let x2 = 0; x2 < W; x2++) {
            if (board[y2][x2] == 0) full = false
        }

        if (full) {
            for (let ty = y2; ty > 0; ty--) {
                for (let x3 = 0; x3 < W; x3++) {
                    board[ty][x3] = board[ty - 1][x3]
                }
            }
            for (let x4 = 0; x4 < W; x4++) {
                board[0][x4] = 0
            }
            y2++
        }
    }
}
input.onButtonPressed(Button.A, function () {
    onbuttonPressed(1)
})
function merge () {
    for (let s = 0; s <= piece.length - 1; s++) {
        for (let d = 0; d <= piece[s].length - 1; d++) {
            if (piece[s][d] == 1) {
                board[py + s][px + d] = 1
            }
        }
    }
}
function draw () {
    basic.clearScreen()
    for (let y3 = 0; y3 <= H - 1; y3++) {
        for (let x5 = 0; x5 <= W - 1; x5++) {
            if (board[y3][x5] == 1) {
                led.plot(x5, y3)
            }
        }
    }
    for (let t = 0; t <= piece.length - 1; t++) {
        for (let g = 0; g <= piece[t].length - 1; g++) {
            if (piece[t][g] == 1) {
                led.plot(px + g, py + t)
            }
        }
    }
}
function newPiece () {
    piece = pieces[randint(0, pieces.length - 1)]
    px = 1
    py = 0
}
input.onButtonPressed(Button.AB, function () {
    onbuttonPressed(3)
})
radio.onReceivedString(function (receivedString) {
    messages_read = 0
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.InBackground)
    led.plot(4, 0)
    while (messages_read == 0) {
        if (input.buttonIsPressed(Button.AB) && input.logoIsPressed()) {
            messages_read = 1
        }
    }
    led.unplot(4, 0)
    templistvariable = [currenticon, currentApp]
    basic.clearScreen()
    basic.pause(100)
    basic.showString(receivedString)
})
function spawn () {
    obstacles.push([4, 4])
}
input.onButtonPressed(Button.B, function () {
    onbuttonPressed(2)
})
// -------- NERFED LEVEL PATTERNS --------
function levelPattern () {
    // Level 1 – very easy
    if (level == 1 && tick % 7 == 0) {
        spawn()
    }
    // Level 2 – easy
    if (level == 2 && tick % 6 == 0) {
        spawn()
    }
    // Level 3 – medium (light doubles, spaced)
    if (level == 3) {
        if (tick % 8 == 0) {
            spawn()
        }
        if (tick % 16 == 12) {
            spawn()
        }
    }
    // Level 4 – medium-hard (clean rhythm)
    if (level == 4 && tick % 5 == 0) {
        spawn()
    }
    // Level 5 – hard but FAIR (nerfed)
    if (level == 5) {
        if (tick % 6 == 0) {
            spawn()
        }
        if (tick % 14 == 10) {
            spawn()
        }
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    onbuttonPressed(4)
})
function onbuttonPressed (buttonIDnum: number) {
    if (buttonIDnum == 1) {
        if (currenticon == 1) {
            setIcon(icon6)
            currenticon = 6
        } else if (currenticon == 2) {
            setIcon(icon1)
            currenticon = 1
        } else if (currenticon == 3) {
            setIcon(icon2)
            currenticon = 2
        } else if (currenticon == 4) {
            setIcon(icon3)
            currenticon = 3
        } else if (currenticon == 5) {
            setIcon(icon4)
            currenticon = 4
        } else if (currenticon == 6) {
            setIcon(icon5)
            currenticon = 5
        }
    } else if (buttonIDnum == 2) {
        if (currenticon == 1) {
            setIcon(icon2)
            currenticon = 2
        } else if (currenticon == 2) {
            setIcon(icon3)
            currenticon = 3
        } else if (currenticon == 3) {
            setIcon(icon4)
            currenticon = 4
        } else if (currenticon == 4) {
            setIcon(icon5)
            currenticon = 5
        } else if (currenticon == 5) {
            setIcon(icon6)
            currenticon = 6
        } else if (currenticon == 6) {
            setIcon(icon1)
            currenticon = 1
        }
    } else if (buttonIDnum == 3) {
        if (currentApp == 0) {
            control.reset()
        } else {
            if (currenticon == 1) {
                setIcon(icon1)
            } else if (currenticon == 2) {
                setIcon(icon2)
            } else if (currenticon == 3) {
                setIcon(icon3)
            } else if (currenticon == 4) {
                setIcon(icon4)
            } else if (currenticon == 5) {
                setIcon(icon5)
            } else if (currenticon == 6) {
                setIcon(icon6)
            }
            currentApp = 0
            lol = 0
            applicationInit(0)
            power.lowPowerRequest(LowPowerMode.Continue)
        }
    } else if (buttonIDnum == 4) {
        if (currentApp == 0) {
            if (icon == icon1) {
                currentApp = 1
            } else if (icon == icon2) {
                currentApp = 2
            } else if (icon == icon3) {
                currentApp = 3
            } else if (icon == icon4) {
                currentApp = 4
            } else if (icon == icon5) {
                currentApp = 5
            } else if (icon == icon6) {
                currentApp = 6
            }
            applicationInit(currentApp)
        }
    }
}
function rotate () {
    if (piece.length != 2 || piece[0].length != 2) {
        return
    }
    a = piece[0][0]
    b = piece[0][1]
    e = piece[1][0]
    f = piece[1][1]
    old = piece
    piece = [[e, a], [f, b]]
    if (collides(px, py)) {
        piece = old
    }
}
// 1 V
// 
// 2
// 
// 3 V
// 
// 4 V
// 
// 5 V
function applicationInit (appId: number) {
    if (appId == 0) {
        while (forever2 == 0) {
            icon.showImage(0)
        }
    } else if (appId == 1) {
        radio_id = 0
        radioid = 0
        while (radioid == 0) {
            if (input.buttonIsPressed(Button.A)) {
                if (radio_id == 0) {
                    radio_id = 254 + 1
                } else {
                    radio_id = value + 1
                }
                basic.showNumber(radio_id)
            } else if (input.buttonIsPressed(Button.B)) {
                if (radio_id == 255) {
                    radio_id = 0 + 0
                } else {
                    radio_id = value + 1
                }
                basic.showNumber(radio_id)
            } else if (input.logoIsPressed()) {
                radio.setGroup(radio_id)
                radioid = 1
            }
        }
        while (radioid == 1) {
            letter_list = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
            ]
            if (input.buttonIsPressed(Button.A)) {
                if (value == 1) {
                    value = 25 + 1
                } else {
                    value = value + 1
                }
                selected_letter = letter_list[value]
                basic.showString("" + (selected_letter))
            } else if (input.buttonIsPressed(Button.B)) {
                if (value == 26) {
                    value = 0 + 1
                } else {
                    value = value + 1
                }
                selected_letter = letter_list[value]
                basic.showString("" + (selected_letter))
            } else if (input.isGesture(Gesture.Shake)) {
                string = "" + string + selected_letter
            } else if (input.logoIsPressed()) {
                radio.sendString(string)
            }
        }
    } else if (appId == 4) {
        ballX = 2
        ballY = 2
        dx = 1
        dy = 1
        paddleX = 2
        score_pingpong = 0
        gameInProgress = 1
        while (gameInProgress == 1) {
            if (paddleX > 1) {
                paddleX += 0 - 1
            } else if (paddleX < 3) {
                paddleX += 1
            }
            basic.clearScreen()
            led.plot(paddleX - 1, 4)
            led.plot(paddleX, 4)
            led.plot(paddleX + 1, 4)
            led.plot(ballX, ballY)
            basic.pause(300)
            ballX += dx
            ballY += dy
            // bounce off walls
            if (ballX <= 0 || ballX >= 4) {
                dx = 0 - dx
            }
            if (ballY <= 0) {
                dy = 0 - dy
            }
            // paddle collision
            if (ballY == 3 && (ballX == paddleX || ballX == paddleX - 1 || ballX == paddleX + 1)) {
                dy = 0 - dy
                score += 1
            }
            // miss = game over (Game block)
            if (ballY >= 4) {
                for (let index = 0; index < 5; index++) {
                    basic.clearScreen()
                    basic.showIcon(IconNames.Skull)
                    basic.pause(250)
                }
                basic.clearScreen()
                basic.showString("GAME OVER")
                basic.clearScreen()
                basic.showString("SCORE:")
                basic.clearScreen()
                basic.showNumber(score)
            }
        }
    } else if (appId == 3) {
        settingsicons = [
        images.createImage(`
            . . # . .
            . # # # .
            # . # . #
            # . . . #
            . # # # .
            `),
        images.createImage(`
            . . . . .
            # # # # #
            # . . # #
            # . . # #
            # # # # #
            `),
        images.createImage(`
            . # # # .
            # . . . #
            # # . . #
            # . # . #
            . # # # .
            `),
        images.createImage(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # . # #
            `),
        images.createImage(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `),
        images.createImage(`
            . # # # .
            # # # # #
            # # . # #
            # # # # #
            . # # # .
            `),
        images.createImage(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . # # . .
            `),
        images.createImage(`
            . . . . .
            . . . . .
            # . . . .
            . # . . .
            # . # # #
            `)
        ]
        lol = 1
        while (lol == 1) {
            currentfunction = 0
            _function = settingsicons[currentfunction]
            _function.showImage(0)
            if (input.buttonIsPressed(Button.A)) {
                if (currentfunction == 0) {
                    currentfunction = 7
                } else {
                    currentfunction += -1
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (currentfunction == 7) {
                    currentfunction = 0
                } else {
                    currentfunction += 1
                }
            } else if (input.logoIsPressed()) {
                settingsfunction = currentfunction
                if (settingsfunction == 0) {
                    control.reset()
                } else if (settingsfunction == 1) {
                    basic.showString("WIP")
                } else if (settingsfunction == 2) {
                    basic.showString("64MHz")
                } else if (settingsfunction == 3) {
                    basic.showString("128KB")
                } else if (settingsfunction == 4) {
                    basic.showString("Nordic Semiconductor nRF52833, 32-bit ARM Cortex-M4 with FPU")
                } else if (settingsfunction == 5) {
                    basic.showString("512KB")
                } else if (settingsfunction == 6) {
                    basic.showIcon(IconNames.No)
                } else if (settingsfunction == 7) {
                    basic.showString("WIP")
                }
                basic.clearScreen()
            }
        }
    } else if (appId == 5) {
        if (sound == 1) {
            sound = 0
        } else {
            sound = 1
        }
    } else if (appId == 2) {
        // ==========================
        // CONSTANTS (MUST BE FIRST)
        // ==========================
        W = 5
        H = 5
        // ==========================
        // VARIABLES (MUST COME NEXT)
        // ==========================
        board = [
        [
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0
        ]
        ]
        piece = [[1, 1], [1, 1]]
        px = 1
        // O
        // I
        // L
        // J
        pieces = [
        [[1, 1], [1, 1]],
        [[1, 1, 1]],
        [[1, 0], [1, 1]],
        [[0, 1], [1, 1]]
        ]
        resetBoard()
        newPiece()
        while (0 == 0) {
            if (input.buttonIsPressed(Button.A)) {
                if (!(collides(px - 1, py))) {
                    px += -1
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (!(collides(px + 1, py))) {
                    px += 1
                }
            } else if (input.logoIsPressed()) {
                rotate()
            }
            if (!(collides(py + 1, px))) {
                py += 1
            } else {
                merge()
                clearLines()
                newPiece()
            }
            draw()
            basic.pause(700)
        }
    } else if (appId == 6) {
        while (appId == 6) {
            let speed = 0
            let MAX_LEVEL = 0
            // ===== MENU =====
            if (mode == 0) {
                basic.clearScreen()
                if (level <= unlocked) {
                    basic.showNumber(level)
                } else {
                    basic.showIcon(IconNames.No)
                }
                basic.pause(100)
                return
            }
            // ===== GAME =====
            basic.clearScreen()
            tick += 1
            levelPattern()
            // physics
            velocity += gravity
            playerY += velocity
            if (playerY > 4) {
                playerY = 4
                velocity = 0
            }
            for (let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i][0]--

            // collision
            if (obstacles[i][0] == 1 && obstacles[i][1] == playerY) {
                music.playTone(131, music.beat(BeatFraction.Whole))
                basic.showIcon(IconNames.Skull)
                basic.pause(800)
                mode = 0
            }

            if (obstacles[i][0] < 0) {
                obstacles.removeAt(i)
            } else {
                led.plot(obstacles[i][0], obstacles[i][1])
            }
        }
// WIN CONDITION
            if (tick > 80) {
                music.playTone(988, music.beat(BeatFraction.Whole))
                if (unlocked < MAX_LEVEL) {
                    unlocked += 1
                }
                basic.showIcon(IconNames.Yes)
                basic.pause(800)
                mode = 0
            }
            // player
            led.plot(1, playerY)
            basic.pause(speed)
            if (input.buttonIsPressed(Button.A)) {
                if (mode == 0) {
                    level += -1
                    if (level < 1) {
                        level = MAX_LEVEL
                    }
                } else if (mode == 1 && playerY == 4) {
                    let jumpPower = 0
                    velocity = jumpPower
                    music.playTone(880, music.beat(BeatFraction.Sixteenth))
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (mode == 0) {
                    level += 1
                    if (level > MAX_LEVEL) {
                        level = 1
                    }
                }
            }
        }
    } else {
    	
    }
}
function resetBoard () {
    for (let y = 0; y <= H - 1; y++) {
        for (let x = 0; x <= W - 1; x++) {
            board[y][x] = 0
        }
    }
}
let unlocked = 0
let sound = 0
let settingsfunction = 0
let _function: Image = null
let currentfunction = 0
let settingsicons: Image[] = []
let score = 0
let gameInProgress = 0
let score_pingpong = 0
let paddleX = 0
let dy = 0
let dx = 0
let ballY = 0
let ballX = 0
let string = ""
let selected_letter = ""
let letter_list: string[] = []
let value = 0
let radioid = 0
let radio_id = 0
let old: number[][] = []
let f = 0
let e = 0
let b = 0
let a = 0
let lol = 0
let level = 0
let templistvariable: number[] = []
let messages_read = 0
let pieces: number[][][] = []
let px = 0
let py = 0
let currentBootimage: Image = null
let frameBoot = 0
let bootsequenceImage: Image[] = []
let icon6: Image = null
let icon5: Image = null
let icon4: Image = null
let icon3: Image = null
let icon2: Image = null
let icon1: Image = null
let forever2 = 0
let currenticon = 0
let icon: Image = null
let tick = 0
let velocity = 0
let ny = 0
let nx = 0
let piece: number[][] = []
let gravity = 0
let currentApp = 0
let W = 0
let H = 0
let board: number[][] = []
let playerY = 0
let obstacles: number[][] = []
// 0 = menu, 1 = playing
let mode = 0
let SYSstatus = 0
kernelstartupInit()
applicationInit(0)
SYSstatus = 1
while (currentApp == 0) {
    power.lowPowerRequest(LowPowerMode.Continue)
}
applicationInit(currentApp)
playerY = 4
gravity = 1
