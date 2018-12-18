function wildLogic(line) {
    // Wild Logic without Free Spins
    let a = slotsArr[line[0]].stop
    let b = slotsArr[line[1]].stop
    let c = slotsArr[line[2]].stop
    let d = slotsArr[line[3]].stop
    let e = slotsArr[line[4]].stop

    if ((a == b && b == c && c == d && d == e)) {
        // console.log('All 5 match!')
        winLines[i] = {
            multiplier: 5,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((a == b || a == 9) &&
        (b == c || b == a || b == 9) &&
        (c == d || c == b || c == 9) &&
        (d == b || d == c || d == 9) &&
        (e == d || e == a || e == 9)) {
        // 5 matching with Wilds
        let sym
        if (a != 9) sym = a
        else if (b != 9) sym = b
        else if (c != 9) sym = c
        else if (d != 9) sym = d
        else if (e != 9) sym = e
        else sym = 9

        winLines[i] = {
            multiplier: 5,
            symbolID: sym,
            payline: i,
            slots: line
        }
    } else if ((a == b && b == c && c == d) || (b == c && c == d && d == e)) {
        //4 Seq Match
        winLines[i] = {
            multiplier: 4,
            symbolID: c,
            payline: i,
            slots: line
        }
    } else if ((b == c || b == 9) && (c == d || c == 9) && (d == e || d == 9) && ((a == b || a == c || a == 9) || (e == c || e == d || e == 9))) {
        let sym
        if (a != 9) sym = a
        else if (b != 9) sym = b
        else if (c != 9) sym = c
        else if (d != 9) sym = d
        else if (e != 9) sym = e
        else sym = 9
            // console.log('4 match!')
        winLines[i] = {
            multiplier: 4,
            symbolID: sym,
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
    } else if ((c == sym || c == 9) && (((a == sym || a == 9) || (b == sym || b == 9)) || ((b == sym || b == 9) || (d == sym || d == 9)) || ((d == sym || d == 9) || (e == sym || e == 9)))) {
        //Three Match With Wild
        let sym
        if (a != 9) sym = a
        else if (b != 9) sym = b
        else if (c != 9) sym = c
        else if (d != 9) sym = d
        else if (e != 9) sym = e
        else sym = 9
            // console.log('4 match!')
        winLines[i] = {
            multiplier: 3,
            symbolID: sym,
            payline: i,
            slots: line
        }
    } else {
        // console.log('No match')
        winLines[i] = false
    }
}