function stopSlots() {
    for (i = 0; i < 15; i++) {
        console.log('StopSlots')
        console.log(slotsArr[i].stop)
        let stop = getSymbol()
        slotsArr[i].stop = stop
        console.log(stop)
        slot[i].gotoAndStop(stop)
    }
    stage.update()
}