function stopReel(reel) {
    let reelSyms = []
    for (i = 0; i < reel.length; i++) {
        let stop = getSymbol()
        reelSyms[i] = {
            stop: stop,
            symbol: symbolsObj[stop].name,
            slot: reel[i]
        }
        if ((symbolsObj[stop].name === 'bonus' || symbolsObj[stop].name === 'sym13') && wager === 150) {
            bonusRound()
        } else if (symbolsObj[stop].name == 'sym11' || symbolsObj[stop].name == 'freeSpins') {
            freeSpinsRound()
        }
        slotsArr[reel[i]].stop = stop
        slot[reel[i]].gotoAndStop(stop)
        slot[reel[i]].shadow = new createjs.Shadow('#888888', 3, 3, 5)
    }
    stage.update()
    playSnd(2, "stop");
}

function bonusRound() {
    console.log("Bonus Found!");
    //playSnd(9, "bonusHit");
}

function freeSpinsRound() {
    console.log("FreeSpins Found!");
    //playSnd(9, "bonusHit");
}