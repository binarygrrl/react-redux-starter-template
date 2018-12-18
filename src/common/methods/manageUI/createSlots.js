let slot = []

function createSlotsArr(symbolSprite) {
    for (i = 0; i < 15; i++) {
        slot[i] = new createjs.Sprite(symbolSprite, i)
        slot[i].x = slotsArr[i].posx
        slot[i].y = slotsArr[i].posy
        slot[i].shadow = new createjs.Shadow('#888888', 3, 3, 5)
        if (gameTitle == "trickOrTreat") {
            slot[i].scaleX = 1;
            slot[i].scaleY = 1;
        } else if (gameTitle == "flamingSevens") {
            slot[i].scaleX = 0.9;
            slot[i].scaleY = 0.9;
        } else if (gameTitle == "littleRed") {
            slot[i].scaleX = 0.85;
            slot[i].scaleY = 0.85;
        } else if (gameTitle == "countryFarm") {
            slot[i].scaleX = 0.78;
            slot[i].scaleY = 0.78;
        } else if (gameTitle == "fireAndIce") {
            slot[i].scaleX = 0.74;
            slot[i].scaleY = 0.74;
        } else if (gameTitle == "oilStrike") {
            slot[i].scaleX = 0.75;
            slot[i].scaleY = 0.75;
        }
        let stop = getSymbol()

        slotsArr[i].stop = stop
        slot[i].gotoAndStop(slotsArr[i].stop)

        //For testing
        //slot[i].gotoAndStop(0)
        stage.addChild(slot[i])
    }
}