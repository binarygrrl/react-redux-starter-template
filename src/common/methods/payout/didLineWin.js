let a, b, c, d, e

function didLineWin(line) { // Line is an array of 5 stop symbol ids
    // let amountWon = 0
    a = line[0]
    b = line[1]
    c = line[2]
    d = line[3]
    e = line[4]

    for (i = 0; i < 21; i++) {
        // For each win condition - see if there is a match 

        let winVal = storeLogicSwitch(WinConditions[i].logic, WinConditions[i].symbols[0])
        if (!winVal && WinConditions[i].symbols[1]) {
            winVal = storeLogicSwitch(WinConditions[i].logic, WinConditions[i].symbols[1])
        } else if (!winVal && WinConditions[i].symbols[2]) {
            winVal = storeLogicSwitch(WinConditions[i].logic, WinConditions[i].symbols[2])
        } else if (!winVal && WinConditions[i].symbols[3]) {
            winVal = storeLogicSwitch(WinConditions[i].logic, WinConditions[i].symbols[3])
        } else if (!winVal && WinConditions[i].symbols[4]) {
            winVal = storeLogicSwitch(WinConditions[i].logic, WinConditions[i].symbols[4])
        } else if (!winVal && i == 20) { return 0 }
        return winVal

        /*     if (WinConditions[i].logic.length === 1) {
              if (WinConditions[i].logic[0]) {
                return WinConditions[i].amount
              }
            } else if (WinConditions[i].logic[0]) {
              return WinConditions[i].amount
            } else if (WinConditions[i].logic[1]) {
              return WinConditions[i].amount
            } else if (WinConditions[i].logic[2]) {
              return WinConditions[i].amount
            } else if (WinConditions[i].logic[3]) {
              return WinConditions[i].amount
            } else if (i == WinConditions.length - 1) {
              return 0
            } */
    }
}

function storeLogicSwitch(logic, sym) {
    switch (logic) {
        case 1:
            allFiveEqual(sym)
        case 2:
            fourSeqEqual(sym)
        case 3:
            threeSeqEqual(sym)
        case 4:
            twoFreeSpins()
        case 5:
            fiveSymbolsOrWild(sym)
        case 6:
            fourSymbolsOrWild(sym)
        case 7:
            threeSymbolsOrWild(sym)
    }
}

function allFiveEqual(sym) {
    console.log('allFiveEqual')
    return (
        (a == sym && b == sym && c == sym && d == sym && e == sym)
    )
}

function fourSeqEqual(sym) {
    console.log('fourSeqEqual')
    return (
        (b == sym && c == sym && d == sym && (a == sym || e == sym))
    )
}

function threeSeqEqual(sym) {
    console.log('threeSeqEqual')
    return (
        (c == sym && ((a == sym && b == sym) || (b == sym && d == sym) || (d == sym && e == sym)))
    )
}

function twoFreeSpins() {
    console.log('twoFreeSpins')
    return (
        (a == 5 && b == 5) ||
        (b == 5 && c == 5) ||
        (c == 5 && d == 5) ||
        (d == 5 && e == 5)
    )
}

function fiveSymbolsOrWild(sym) {
    console.log('fiveSymbolsOrWild')
        // const fiveSymbolsOrWild = (sym) => {
    return (
        (a == sym || a == 9) &&
        (b == sym || b == 9) &&
        (c == sym || c == 9) &&
        (d == sym || d == 9) &&
        (e == sym || e == 9)
    )
}

function fourSymbolsOrWild(sym) {
    console.log('fourSymbolsOrWild')
    return (
        (b == sym || b == 9) &&
        (c == sym || c == 9) &&
        (d == sym || d == 9) && (
            (a == sym || a == 9) ||
            (e == sym || e == 9))
    )
}

function threeSymbolsOrWild(sym) {
    console.log('threeSymbolsOrWild')
        // const fiveSymbolsOrWild = (sym) => {
    return (
        (c == sym || c == 9) &&
        (
            (
                (a == sym || a == 9) ||
                (b == sym || b == 9)
            ) || (
                (b == sym || b == 9) ||
                (d == sym || d == 9)
            ) || (
                (d == sym || d == 9) ||
                (e == sym || e == 9)
            )
        )
    )
}