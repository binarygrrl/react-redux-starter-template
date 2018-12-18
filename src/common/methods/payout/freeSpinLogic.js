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