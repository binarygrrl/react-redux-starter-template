let backPlay, helpAbout, helpBonus, helpPayLines, helpPaytable
let payTable, about, bonusHelp, payLines
let helpButtonSprite = new createjs.SpriteSheet(helpButtons)

function createHelpButtons() {
    backPlay = new createjs.Sprite(buttonSprite, 'Play_Enabled')
    helpAbout = new createjs.Sprite(helpButtonSprite, 'HelpAbout1')
    helpBonus = new createjs.Sprite(helpButtonSprite, 'HelpBonus1')
    helpPayLines = new createjs.Sprite(helpButtonSprite, 'HelpPayLines1')
    helpPaytable = new createjs.Sprite(helpButtonSprite, 'HelpPaytable1')

    backPlay.x = 390
    backPlay.y = 670

    helpAbout.x = 100
    helpAbout.y = 670
    helpAbout.scaleX = 0.5
    helpAbout.scaleY = 0.5

    helpBonus.x = 230
    helpBonus.y = 670
    helpBonus.scaleX = 0.5
    helpBonus.scaleY = 0.5

    helpPayLines.x = 650
    helpPayLines.y = 670
    helpPayLines.scaleX = 0.5
    helpPayLines.scaleY = 0.5

    helpPaytable.x = 780
    helpPaytable.y = 670
    helpPaytable.scaleX = 0.5
    helpPaytable.scaleY = 0.5
}

function createInfoButtons() {
    createHelpButtons()
    stage.addChild(backPlay)
    stage.addChild(helpAbout)
    stage.addChild(helpBonus)
    stage.addChild(helpPayLines)
    stage.addChild(helpPaytable)

    backPlay.addEventListener('click', handleBackPlay)
    helpAbout.addEventListener('click', handleHelpAbout)
    helpBonus.addEventListener('click', handleHelpBonus)
    helpPayLines.addEventListener('click', handleHelpPayLines)
    helpPaytable.addEventListener('click', handleHelpPaytable)

    stage.update()
}

function handleBackPlay(event) {
    console.log('You clicked play!')
    playSnd(1, "click");
    stopSound(26, "info");
    removeInfoScene()
    hideHelpButtons()
    showButtons()
    stage.update()
}

function handleHelpAbout(event) {
    playSnd(1, "click");
    removeInfoScene()
    showAbout()
    showHelpButtons()
}

function handleHelpBonus(event) {
    playSnd(1, "click");
    removeInfoScene()
    showBonusHelp()
    showHelpButtons()
}

function handleHelpPayLines(event) {
    playSnd(1, "click");
    removeInfoScene()
    showPayLines()
    showHelpButtons()
}

function handleHelpPaytable(event) {
    playSnd(1, "click");
    removeInfoScene()
    showPayTable()
    showHelpButtons()
}

function showHelpButtons() {
    createInfoButtons()
}

function hideHelpButtons() {
    stage.removeChild(backPlay)
    stage.removeChild(helpAbout)
    stage.removeChild(helpBonus)
    stage.removeChild(helpPayLines)
    stage.removeChild(helpPaytable)
    stage.update()
}

function createHelpScreens() {
    // Instead of the current way - switch the same view to different images
    payTable = new createjs.Bitmap(paytableIMG)
    about = new createjs.Bitmap(aboutIMG)
    bonusHelp = new createjs.Bitmap(bonusHelpIMG)
    payLines = new createjs.Bitmap(paylinesIMG)
    payTable.x = 0
    payTable.y = 0
    about.x = 0
    about.y = 0
    bonusHelp.x = 0
    bonusHelp.y = 0
    payLines.x = 0
    payLines.y = 0
}

function showPayTable() {
    removeInfoScene()
    stage.addChild(payTable)
    createInfoButtons()
}

function showAbout() {
    removeInfoScene()
    stage.addChild(about)
    createInfoButtons()
}

function showBonusHelp() {
    removeInfoScene()
    stage.addChild(bonusHelp)
    createInfoButtons()
}

function showPayLines() {
    removeInfoScene()
    stage.addChild(payLines)
    createInfoButtons()
}

function hidePayLines() {
    removeInfoScene()
    stage.removeChild(payLines)
    stage.update()
}

function createInfoScene() {
    playSnd(26, 'info')
    createHelpScreens()
    showPayLines()
    createInfoButtons()
}

function removeInfoScene() {
    console.log('Remove Info Scene')
    stage.removeChild(payTable)
    stage.removeChild(about)
    stage.removeChild(bonusHelp)
    stage.removeChild(payLines)
    showGameView()
    stage.update()
}