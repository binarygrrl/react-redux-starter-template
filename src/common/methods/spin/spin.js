function spin(cb) {
    playing = true
    stage.removeChild(hawker)
    addHawkerText('Good Luck!', 470)
    if (playing && wager < 150) {
        setTimeout(function() {
            stage.removeChild(hawker)
            addHawkerText('Play Max Bet for Bonuses and Jackpot Play', 335)
        }, 1000)
    }
    spinSlots()
    let startTick = getTickTime()
    credits -= wager
    updateScreenText(credits, wager, totalWin)

    setTimeout(function() {
        stopReel(reels[0])
    }, 1000)
    setTimeout(function() {
        stopReel(reels[1])
    }, 1500)
    setTimeout(function() {
        stopReel(reels[2])
    }, 2000)
    setTimeout(function() {
        stopReel(reels[3])
    }, 2500)
    setTimeout(function() {
        stopReel(reels[4])
    }, 3000)
    setTimeout(function() {
        if (cb) cb()
    }, 3100)
    setTimeout(function() {
        stopSound(27, "spin")
        stage.removeChild(hawker)
        determinePayout()
        enableButtons()
        playing = false
    }, 3300)
}

function getTickTime() {
    return createjs.Ticker.getTime()
}

function updateScreenText(credits, wager, totalWin) {
    stage.removeChild(creditsText)
    stage.removeChild(wagerText)
    stage.removeChild(winningText)

    // Show credits
    creditsText = new createjs.Text(credits.toString(), '20px Arial', textColor)
    creditsText.x = 290
    creditsText.y = 686
    stage.addChild(creditsText)

    // Show Wager
    wagerText = new createjs.Text(wager.toString(), '20px Arial', textColor)
    wagerText.x = 710
    wagerText.y = 710
    stage.addChild(wagerText)

    // Show Wager
    winningText = new createjs.Text(totalWin.toString(), '20px Arial', textColor)
    winningText.x = 296
    winningText.y = 740
    stage.addChild(winningText)
}

function printToLog(text) {
    console.log(text)
}

function getStops() {
    let stops = slotsArr.map(function(x) {
        return x.stop
    })
    return stops
}


function playBonus() {
    console.log("playBonus");
}

function playFreeSpins() {
    console.log("playFreeSpins");
}

function checkSpecial(stops) {
    console.log(stops)
    if (stops.includes(11)) {
        let b = stops.filter(function(s) {
            return s == 11
        });
        console.log('b')
        console.log(b)
        if (b.length > 2) {
            playBonus();
        }
    }
    if (stops.includes(10)) {
        let b = stops.filter(function(s) {
            return s == 10
        });
        console.log("b");
        console.log(b);
        if (b.length > 1) {
            playFreeSpins();
        }
    }
}

function determinePayout() {
    let stops = getStops()
    checkSpecial(stops)
    let winnings = getWinningLines(paylines)
    sumWinnings(winnings)
}

let hawker

function sumWinnings(winnings) {
    let sum = 0
    for (i = 0; i < winnings.length; i++) {
        if (winnings[i]) {
            // console.log(winnings[i])
            let a = winnings[i]
            showWinningPaylines(a)

            let level = symbolsObj[a.symbolID].lvl
            if (a.multiplier === 2) {
                playSnd(21, "wincount");
                sum += paylevels[level].x2
            } else if (a.multiplier === 3) {
                playSnd(21, "wincount");
                sum += paylevels[level].x3
            } else if (a.multiplier === 4) {
                playSnd(21, "wincount");
                sum += paylevels[level].x4
            } else if (a.multiplier === 5) {
                playSnd(21, "wincount");
                sum += paylevels[level].x5
            }
        }
    }

    let totalSum = sum * wager / 30

    hawker = new createjs.Text('Won ' + totalSum.toString(), '20px Arial', textColor)
    hawker.x = 470
    hawker.y = 626
    stage.addChild(hawker)

    credits += totalSum
    updateScreenText(credits, wager, totalSum)
}

function showWinningPaylines(line) {
    drawPayline(line.payline)
    drawPaylineAnimation(line)
}

function addHawkerText(text, x) {
    hawker = new createjs.Text(text.toString(), '20px Arial', textColor)
    hawker.x = x
    hawker.y = 626
    stage.addChild(hawker)
}

function drawPaylineAnimation(line) {
    let w = 150
    let h = 160
    let r = 'blue'

    let slots = line.slots
    let pline = line.payline

    let a = slotsArr[slots[0]]
    let b = slotsArr[slots[1]]
    let c = slotsArr[slots[2]]
    let d = slotsArr[slots[3]]
    let e = slotsArr[slots[4]]

    if (pline < 15) {
        drawLine(paylineMarkers[pline].x + 9, paylineMarkers[pline].y, a.posx, a.posy + 80, 'blue')
    } else if (pline > 15) {
        drawLine(e.posx, e.posy + 80, paylineMarkers[pline].x - 9, paylineMarkers[pline].y, 'blue')
    }

    if (a.stop == line.symbolID) {
        drawRectangle(a.posx, a.posy, w, h, r)
        drawLine(a.posx + 150, a.posy + 80, b.posx, b.posy + 80, 'blue')
    } else {
        drawLine(a.posx, a.posy + 80, b.posx, b.posy + 80, 'blue')
    }
    if (b.stop == line.symbolID) {
        drawRectangle(b.posx, b.posy, w, h, r)
        drawLine(b.posx + 150, b.posy + 80, c.posx, c.posy + 80, 'blue')
    } else {
        drawLine(b.posx, b.posy + 80, c.posx, c.posy + 80, 'blue')
    }
    if (c.stop == line.symbolID) {
        drawRectangle(c.posx, c.posy, w, h, r)
        drawLine(c.posx + 150, c.posy + 80, d.posx, d.posy + 80, 'blue')
    } else {
        drawLine(c.posx, c.posy + 80, d.posx, d.posy + 80, 'blue')
    }
    if (d.stop == line.symbolID) {
        drawRectangle(d.posx, d.posy, w, h, r)
        drawLine(d.posx + 150, d.posy + 80, e.posx, e.posy + 80, 'blue')
    } else {
        drawLine(d.posx, d.posy + 80, e.posx, e.posy + 80, 'blue')
    }
    if (e.stop == line.symbolID) {
        drawRectangle(e.posx, e.posy, w, h, r)
        drawLine(d.posx + 150, d.posy + 80, e.posx + 75, e.posy + 80, 'blue')
    } else {
        drawLine(e.posx, e.posy + 80, e.posx + 90, e.posy + 80, 'blue')
    }
}

/*****  These are in the Draw Folder *****/
function drawLine(a, b, x, y, color) {
    // Start at point a,b
    // Draw line to x, y
    let shape = new createjs.Shape()
    shape.graphics.setStrokeStyle(5).beginStroke(color).moveTo(a, b).lineTo(x, y)
        // stage.addChild(shape)
        /* setTimeout(function() {
            stage.removeChild(shape)
        }, 3000) */
}

function drawRectangle(x, y, w, h, color) {
    let shape = new createjs.Shape()
    shape.graphics.beginStroke(color).setStrokeStyle(4).drawRect(x, y, w, h)
    stage.addChild(shape)
    setTimeout(function() {
        stage.removeChild(shape)
    }, 3000)
}

function drawPayline(id) {
    drawCircle(paylineMarkers[id].x, paylineMarkers[id].y, 'blue')
}

function drawCircle(x, y, color) {
    let r = 18
    let shape = new createjs.Shape()
    shape.graphics.beginStroke(color).setStrokeStyle(4).drawCircle(x, y, r)
    stage.addChild(shape)
    setTimeout(function() {
        stage.removeChild(shape)
    }, 3000)
}