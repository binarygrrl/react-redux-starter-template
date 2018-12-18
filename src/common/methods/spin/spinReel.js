function spinReel(reel) {
    for (i = 0; i < reel.length; i++) {
        /* console.log('SpinReel')
        console.log(slotsArr[reel[i]].stop) */
        slotsArr[reel[i]].stop = getSymbol()
        let stop = slotsArr[reel[i]].stop
        slotsArr[reel[i]].stop = getSymbol()
            // console.log(stop)
        slot[reel[i]].gotoAndPlay(stop)
    }
    stage.update()
}