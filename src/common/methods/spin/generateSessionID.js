function generateSessionID() {
    // 00000LL1111LLL222
    let session = getRandomInt(10000, 100000).toString()

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    session += getRandomInt(1000, 10000).toString()

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    letters = getRandomInt(0, 26)
    session += LETTERS[letters]

    session += getRandomInt(100, 1000).toString()
    return session
}