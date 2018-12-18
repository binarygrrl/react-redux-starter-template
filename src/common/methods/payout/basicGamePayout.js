function basicGameMath(line, winLines) {
    let a = slotsArr[line[0]].stop
    let b = slotsArr[line[1]].stop
    let c = slotsArr[line[2]].stop
    let d = slotsArr[line[3]].stop
    let e = slotsArr[line[4]].stop

    if (a == b && b == c && c == d && d == e) {
        // console.log('All 5 match!')
        winLines[i] = {
            multiplier: 5,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((b == c && c == d) && (a == b || e == b)) {
        // console.log('4 match!')
        winLines[i] = {
            multiplier: 4,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == b && b == c) || (b == c && c == d) || (c == d && d == e)) {
        // console.log('3 match!')
        winLines[i] = {
            multiplier: 3,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else {
        // console.log('No match')
        winLines[i] = false
    }
}