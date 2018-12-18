function drawRectangle(x, y, w, h, color) {
    let shape = new createjs.Shape()
    shape.graphics.beginStroke(color).setStrokeStyle(4).drawRect(x, y, w, h)
    stage.addChild(shape)
    setTimeout(function() {
        stage.removeChild(shape)
    }, 3000)
}