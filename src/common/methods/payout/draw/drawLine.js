function drawLine(a, b, x, y, color) {
    // Start at point a,b
    // Draw line to x, y
    let shape = new createjs.Shape()
    shape.graphics.setStrokeStyle(5).beginStroke(color).moveTo(a, b).lineTo(x, y)
        // stage.addChild(shape)
        /* setTimeout(function() {
            stage.removeChild(shape)
        }, 3000) */
}