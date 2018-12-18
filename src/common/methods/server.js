// Create session ID for every game start
//

// Validate PIN on 

function checkPINStatus(pin) {
    if (pin.playing) {
        return false
    } else { return true }
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

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

function createGameSession(pin) {
    if (checkPINStatus(pin)) {
        let session = generateSessionID()
    } else {
        console.log('PIN Is Already Playing')
    }
}

function updatePINBalance(pin, session, amt) {}

function finalizeSession(pin, session) {}

/* Add Sessions Table
SessionID | PIN | Game | Balance | Date

Add Game Stats Table
Game | Session | Result | Date

Add Game Cashflow Table
Game | amount | date
*/