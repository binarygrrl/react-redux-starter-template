const allFiveEqual = (sym) => (a == sym && b == sym && c == sym && d == sym && e == sym)
const fourSeqEqual = (sym) => (b == sym && c == sym && d == sym && (a == sym || e == sym))
const threeSeqEqual = (sym) => (c == sym && ((a == sym && b == sym) || (b == sym && d == sym) || (d == sym && e == sym)))
const twoFreeSpins = () => (a == 10 && b == 10) || (b == 10 && c == 10) || (c == 10 && d == 10) || (d == 10 && e == 10)
const fiveSymbolsOrWild = (sym) => (a == sym || a == 9) && (b == sym || b == 9) && (c == sym || c == 9) && (d == sym || d == 9) && (e == sym || e == 9)
const fourSymbolsOrWild = (sym) => (b == sym || b == 9) && (c == sym || c == 9) && (d == sym || d == 9) && ((a == sym || a == 9) || (e == sym || e == 9))
const threeSymbolsOrWild = (sym) => (c == sym || c == 9) && (((a == sym || a == 9) || (b == sym || b == 9)) || ((b == sym || b == 9) || (d == sym || d == 9)) || ((d == sym || d == 9) || (e == sym || e == 9)))

function allLogic(line) {}

function wildLogic(line) {
    // Wild Logic without Free Spins
    let a = slotsArr[line[0]].stop
    let b = slotsArr[line[1]].stop
    let c = slotsArr[line[2]].stop
    let d = slotsArr[line[3]].stop
    let e = slotsArr[line[4]].stop

    if (a == b && b == c && c == d && d == e) {
        // if (a == b == c == d == e) {
        // console.log('All 5 match!')
        winLines[i] = {
            multiplier: 5,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == b && b == c && c == d) || (b == c && c == d && d == e)) {
        // } else if (a == b == c == d || b == c == d == e) {
        // console.log('4 match!')
        winLines[i] = {
            multiplier: 4,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == b && b == c) || (b == c && c == d) || (c == d && d == e)) {
        // } else if (a == b == c || b == c == d || c == d == e) {
        // console.log('3 match!')
        winLines[i] = {
            multiplier: 3,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == 10 && b == 10) || (b == 10 && c == 10) || (c == 10 && d == 10) || (d == 10 && e == 10)) {
        // console.log('2 Free Spins match!')
        winLines[i] = {
            multiplier: 2,
            symbolID: 10,
            payline: i,
            slots: line
        }
    } else {
        // console.log('No match')
        winLines[i] = false
    }
}

function freeSpinLogic(line) {
    // Free Spins without wildLogic

    let a = slotsArr[line[0]].stop
    let b = slotsArr[line[1]].stop
    let c = slotsArr[line[2]].stop
    let d = slotsArr[line[3]].stop
    let e = slotsArr[line[4]].stop

    if (a == b && b == c && c == d && d == e) {
        // if (a == b == c == d == e) {
        // console.log('All 5 match!')
        winLines[i] = {
            multiplier: 5,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == b && b == c && c == d) || (b == c && c == d && d == e)) {
        // } else if (a == b == c == d || b == c == d == e) {
        // console.log('4 match!')
        winLines[i] = {
            multiplier: 4,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == b && b == c) || (b == c && c == d) || (c == d && d == e)) {
        // } else if (a == b == c || b == c == d || c == d == e) {
        // console.log('3 match!')
        winLines[i] = {
            multiplier: 3,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == 10 && b == 10) || (b == 10 && c == 10) || (c == 10 && d == 10) || (d == 10 && e == 10)) {
        // console.log('2 Free Spins match!')
        winLines[i] = {
            multiplier: 2,
            symbolID: 10,
            payline: i,
            slots: line
        }
    } else {
        // console.log('No match')
        winLines[i] = false
    }
}

/*
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
        (a == 10 && b == 10) ||
        (b == 10 && c == 10) ||
        (c == 10 && d == 10) ||
        (d == 10 && e == 10)
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
*/