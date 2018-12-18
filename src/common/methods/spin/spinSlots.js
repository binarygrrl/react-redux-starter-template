function spinSlots() {
    for (i = 0; i < 15; i++) {
        slot[i].shadow = new createjs.Shadow('#000000', 5, 5, 10)
        slot[i].gotoAndPlay('spin')
    }
    stage.update()
}