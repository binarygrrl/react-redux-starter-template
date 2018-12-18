function getWinningLines(lines) {
    let winLines = []
        // iterate over the active paylines to see if any matches/wins occur
        // then return the array of winLines to getPayout()
    for (i = 0; i < lines.length; i++) {
        let line = lines[i]
        basicGameMath(line, winLines)
            // let amountWon = didLineWin(line)
    }
    return winLines
}

function checkSymbols(line) {
    if (line.includes(9)) {
        if (line.includes(10)) {
            // Both Wild and Free Spins are Included 
            // Run Through All 21 Steps
            allLogic(line)
        } else {
            // Includes Wild
            // Run through wild steps
            wildLogic(line)
        }
    } else if (line.includes(10)) {
        // Includes Free Spins 
        // Run Through Basic and Free Spins Logic
        freeSpinLogic(line)
    } else {
        // Default/Basic logic steps
        basicGameMath(line)
    }
}

function allLogic(line) {

}

function wildLogic(line) {

}

function freeSpinLogic(line) {

}