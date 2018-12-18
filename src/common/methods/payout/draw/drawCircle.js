function drawCircle(x, y, color) {
    let r = payRadius
    let shape = new createjs.Shape()
    shape.graphics.beginStroke(color).setStrokeStyle(4).drawCircle(x, y, r)
    stage.addChild(shape)
    setTimeout(function() {
        stage.removeChild(shape)
    }, 3000)
}