let exitBtn,
    exitBtnHov,
    maxPlayBtn,
    maxPlayBtnHov,
    infoBtn,
    infoBtnHov,
    previewBtn,
    previewBtnHov,
    playBtn,
    playBtnHov,
    downBtn,
    downBtnHov,
    upBtn,
    upBtnHov;

let infoDBtn, maxPlayDBtn, previewDBtn, playDBtn, exitDBtn, downDBtn, upDBtn;

let buttonSprite = new createjs.SpriteSheet(buttons);

function createButtons() {
    createEnabledButtons();
    createDisabledButtons();

    let playMgr = new createjs.ButtonHelper(
        playBtn,
        "Play_Enabled",
        "Play_Disabled",
        "Play_Pressed",
        false
    );
    let exitMgr = new createjs.ButtonHelper(
        exitBtn,
        "Exit_Enabled",
        "Exit_Disabled",
        "Exit_Pressed",
        false
    );
    let infoMgr = new createjs.ButtonHelper(
        infoBtn,
        "Info_Enabled",
        "Info_Disabled",
        "Info_Pressed",
        false
    );
    let maxPlayMgr = new createjs.ButtonHelper(
        maxPlayBtn,
        "MaxPlay_Enabled",
        "MaxPlay_Disabled",
        "MaxPlay_Pressed",
        false
    );
    let previewMgr = new createjs.ButtonHelper(
        previewBtn,
        "Preview_Enabled",
        "Preview_Disabled",
        "Preview_Pressed",
        false
    );
    let downMgr = new createjs.ButtonHelper(
        downBtn,
        "Down_Enabled",
        "Down_Disabled",
        "Down_Pressed",
        false
    );
    let upMgr = new createjs.ButtonHelper(
        upBtn,
        "Up_Enabled",
        "Up_Disabled",
        "Up_Pressed",
        false
    );

    playBtn.addEventListener("click", handlePlay);
    exitBtn.addEventListener("click", handleExit);
    infoBtn.addEventListener("click", handleInfo);
    maxPlayBtn.addEventListener("click", handleMaxPlay);
    previewBtn.addEventListener("click", handlePreview);
    upBtn.addEventListener("click", handleUp);
    downBtn.addEventListener("click", handleDown);

    stage.addChild(playBtn);
    stage.addChild(exitBtn);
    stage.addChild(infoBtn);
    stage.addChild(maxPlayBtn);
    stage.addChild(previewBtn);
    stage.addChild(upBtn);
    stage.addChild(downBtn);
}

function handlePlay(event) {
    playSnd(1, "click");
    if (credits >= wager && !playing) {
        lockButtons();
        spin(enableButtons);
        playSnd(27, "spin");
    } else if (credits < wager || credits < 30) {
        addHawkerText("Add Credits To Play", 430);
        setTimeout(() => {
            stage.removeChild(hawker);
        }, 1000);
    }
}

function handleExit(event) {
    playSnd(1, "click");
    if (!playing) {
        // goto game menu
        window.location = "../index.html";
        console.log("Exit");
    }
}

function handleInfo(event) {
    playSnd(1, "click");
    if (!playing) {
        hideButtons();
        createInfoScene();
    }
}

function handleMaxPlay(event) {
    playSnd(1, "click");
    if (!playing) {
        updateWager(150);
    }
}

function handlePreview(event) {
    playSnd(1, "click");
    if (!playing) {
        console.log("Preview");
    }
}

function handleUp(event) {
    playSnd(1, "click");
    if (!playing) {
        updateWager(30);
    }
}

function handleDown(event) {
    playSnd(1, "click");
    if (!playing) {
        updateWager(-30);
    }
}


function updateWager(amount) {
    wager += amount;
    if (wager < 1) {
        wager = 30;
    } else if (wager > 150) {
        wager = 150;
    }

    stage.removeChild(wagerText);

    // Show Wager
    wagerText = new createjs.Text(wager.toString(), "20px Arial", textColor);
    wagerText.x = 710;
    wagerText.y = 710;
    stage.addChild(wagerText);
}

function lockButtons() {
    showDisabledButtons();
    stage.update();
}

function hideDisabledButtons() {
    stage.removeChild(playDBtn);
    stage.removeChild(exitDBtn);
    stage.removeChild(infoDBtn);
    stage.removeChild(maxPlayDBtn);
    stage.removeChild(previewDBtn);
    stage.removeChild(upDBtn);
    stage.removeChild(downDBtn);
}

function createEnabledButtons() {
    infoBtn = new createjs.Sprite(buttonSprite, "Info_Enabled");
    maxPlayBtn = new createjs.Sprite(buttonSprite, "MaxPlay_Enabled");
    previewBtn = new createjs.Sprite(buttonSprite, "Preview_Enabled");
    playBtn = new createjs.Sprite(buttonSprite, "Play_Enabled");
    exitBtn = new createjs.Sprite(buttonSprite, "Exit_Enabled");
    downBtn = new createjs.Sprite(buttonSprite, "Down_Enabled");
    upBtn = new createjs.Sprite(buttonSprite, "Up_Enabled");

    playBtn.x = 516;
    playBtn.y = 662;
    exitBtn.x = 270;
    exitBtn.y = 662;
    infoBtn.x = 430;
    infoBtn.y = 662;
    maxPlayBtn.x = 600;
    maxPlayBtn.y = 662;
    previewBtn.x = 760;
    previewBtn.y = 662;
    downBtn.x = 200;
    downBtn.y = 662;
    upBtn.x = 360;
    upBtn.y = 662;
}

function createDisabledButtons() {
    infoDBtn = new createjs.Sprite(buttonSprite, "Info_Disabled");
    maxPlayDBtn = new createjs.Sprite(buttonSprite, "MaxPlay_Disabled");
    previewDBtn = new createjs.Sprite(buttonSprite, "Preview_Disabled");
    playDBtn = new createjs.Sprite(buttonSprite, "Play_Disabled");
    exitDBtn = new createjs.Sprite(buttonSprite, "Exit_Disabled");
    downDBtn = new createjs.Sprite(buttonSprite, "Down_Disabled");
    upDBtn = new createjs.Sprite(buttonSprite, "Up_Disabled");

    playDBtn.x = 516;
    playDBtn.y = 662;
    exitDBtn.x = 270;
    exitDBtn.y = 662;
    infoDBtn.x = 430;
    infoDBtn.y = 662;
    maxPlayDBtn.x = 600;
    maxPlayDBtn.y = 662;
    previewDBtn.x = 760;
    previewDBtn.y = 662;
    downDBtn.x = 200;
    downDBtn.y = 662;
    upDBtn.x = 360;
    upDBtn.y = 662;

}

function showDisabledButtons() {
    playDBtn.gotoAndStop("Play_Disabled");
    exitDBtn.gotoAndStop("Exit_Disabled");
    infoDBtn.gotoAndStop("Info_Disabled");
    maxPlayDBtn.gotoAndStop("MaxPlay_Disabled");
    previewDBtn.gotoAndStop("Preview_Disabled");
    upDBtn.gotoAndStop("Up_Disabled");
    downDBtn.gotoAndStop("Down_Disabled");

    stage.addChild(playDBtn);
    stage.addChild(exitDBtn);
    stage.addChild(infoDBtn);
    stage.addChild(maxPlayDBtn);
    stage.addChild(previewDBtn);
    stage.addChild(upDBtn);
    stage.addChild(downDBtn);
}

function enableButtons() {
    playBtn.gotoAndStop("Play_Enabled");
    exitBtn.gotoAndStop("Exit_Enabled");
    infoBtn.gotoAndStop("Info_Enabled");
    maxPlayBtn.gotoAndStop("MaxPlay_Enabled");
    previewBtn.gotoAndStop("Preview_Enabled");
    upBtn.gotoAndStop("Up_Enabled");
    downBtn.gotoAndStop("Down_Enabled");
    showButtons();
}

function showButtons() {
    stage.addChild(playBtn);
    stage.addChild(exitBtn);
    stage.addChild(infoBtn);
    stage.addChild(maxPlayBtn);
    stage.addChild(previewBtn);
    stage.addChild(upBtn);
    stage.addChild(downBtn);

    stage.update();
}

function hideButtons() {
    stage.removeChild(playBtn);
    stage.removeChild(exitBtn);
    stage.removeChild(infoBtn);
    stage.removeChild(maxPlayBtn);
    stage.removeChild(previewBtn);
    stage.removeChild(upBtn);
    stage.removeChild(downBtn);

    stage.update();
}

// This can be changed to remove the add and remove child calls and just switch the button skin
// Since the playing flag has been introduced