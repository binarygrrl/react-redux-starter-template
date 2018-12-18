let creditsText
let winningText
let wagerText
let stage
let mainScreen
let buttonSkin
let textColor = '#fff'
if (!buttonSkinIMG) {
    buttonSkinIMG = ''
}
let logoTop
if (!logo || logo == "") {
    logo = ''
} else {
    logoTop = new createjs.Bitmap(logo)
    if (gameTitle == 'kingTut') {
        logoTop.x = 320
        logoTop.y = 10
    } else if (gameTitle == 'blackMagic') {
        logoTop.x = 0
    } else if (gameTitle == 'fireAndIce') {
        logoTop.scaleX = 0.8
        logoTop.scaleY = 0.8
        logoTop.x = 100
    } else if (gameTitle == 'flamingSevens') {
        logoTop.scaleX = 0.9
        logoTop.scaleY = 0.9
        logoTop.x = 50
    }

}

let w, h, loader


let credits = 0
let totalWin = 0
let wager = 30
let playing = false

// useful keycodes
let KEYCODE_SPACE = 32
let KEYCODE_UP = 38
let KEYCODE_DOWN = 40
let KEYCODE_LEFT = 37
let KEYCODE_RIGHT = 39
let KEYCODE_W = 87
let KEYCODE_A = 65
let KEYCODE_D = 68

function init() {
    //examples.showDistractor() //loading animation
    // Create a stage by getting a reference to the canvas
    stage = new createjs.Stage('gameCanvas')
        //stage = new createjs.StageGL('gameCanvasGL')

    w = stage.canvas.width
    h = stage.canvas.height

    loader = new createjs.LoadQueue(false)
    loader.addEventListener("complete", handleCompleteLoad)
    loader.loadManifest(manifest, true, '../assets/images')
}

function handleCompleteLoad() {
    //examples.hideDistractor()
    createSounds()
    credits = 1000

    // Set the backscreen
    let backScreenIMG = loader.getResult("backscreenIMG")
    let backScreen = new createjs.Bitmap(loader.getResult("backscreenIMG"))
        //let backScreen = new createjs.Bitmap(backscreenIMG)
    stage.addChild(backScreen)

    // Create Slots
    let symbolSprite = new createjs.SpriteSheet(symbolsAll)
    createSlotsArr(symbolSprite)

    // Create the Ticker
    createjs.Ticker.on('tick', tick)
    createjs.Ticker.setFPS(20)

    showGameView()
    let session = generateSessionID()
    console.log(session)

    this.document.onkeydown = keyPressed
}

function generateSessionID() {
    // 00000LL1111LLL222
    let session = getRandomInt(10000, 100000).toString()

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    session += getRandomInt(1000, 10000).toString()

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    session += getRandomInt(100, 1000).toString()
    return session
}

function showMainScreen() {
    // Set the main screen - may need to move down - UI skin
    mainScreen = new createjs.Bitmap(mainscreenIMG)
    stage.addChild(mainScreen)
}

function showGameView() {
    // Show Main Screen
    showMainScreen()

    if (buttonSkinIMG != '') {
        buttonSkin = new createjs.Bitmap(buttonSkinIMG)
        if (gameTitle == "flamingSevens") {
            buttonSkin.y = 530
        } else if (gameTitle == "countryFarm") {
            buttonSkin.y = 600;
        } else {
            buttonSkin.y = 610;
        }

        stage.addChild(buttonSkin)
    }

    if (logo != "") {
        stage.addChild(logoTop);
    }

    // Add Buttons and Help Screens
    createButtons()
    createHelpScreens()

    initCreditText()
    initWagerText()
    initAmountWonText()
}

function initCreditText() {
    // Show credits
    creditsText = new createjs.Text(credits = credits.toString(), '20px Arial', textColor)
    creditsText.x = 290
    creditsText.y = 686
    stage.addChild(creditsText)
}

function initWagerText() {
    // Show Wager
    wagerText = new createjs.Text(wager.toString(), '20px Arial', textColor)
    wagerText.x = 710
    wagerText.y = 710
    stage.addChild(wagerText)
}

function initAmountWonText() {
    // Show Wager
    winningText = new createjs.Text(totalWin.toString(), '20px Arial', textColor)
    winningText.x = 296
    winningText.y = 740
    stage.addChild(winningText)
}

function keyPressed(event) {
    switch (event.keyCode) {
        case KEYCODE_SPACE:
            console.log('Space bar pressed')
            handlePlay()
            break
        case KEYCODE_RIGHT:
            console.log('Right arrow pressed')
            break
        case KEYCODE_UP:
            console.log('Up arrow pressed')
            break
        case KEYCODE_DOWN:
            console.log('Down arrow pressed')
            break
        case KEYCODE_LEFT:
            console.log('Left arrow pressed')
            break
        case KEYCODE_W:
            console.log('W pressed')
            break
        case KEYCODE_A:
            console.log('A pressed')
            break
        case KEYCODE_D:
            console.log('D pressed')
            break
    }
    stage.update()
}

function tick(event) {
    stage.update(event)
}