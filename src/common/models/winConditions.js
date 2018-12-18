const WinConditions = [{
        id: 0,
        seq: 5,
        symbols: [7], // W
        logic: 1,
        // logic: [allFiveEqual(7)],
        amount: 10000
    }, {
        id: 1,
        seq: 4,
        symbols: [7], // W
        logic: 2,
        // logic: [fourSeqEqual(7)],  
        amount: 1000
    }, {
        id: 2,
        seq: 5,
        symbols: [8], // A
        logic: 5,
        // logic: [fiveSymbolsOrWild(8)],
        amount: 1000
    }, {
        id: 3,
        seq: 5,
        symbols: [5], // FS
        logic: 1,
        // logic: [allFiveEqual(5)],
        amount: 800
    }, {
        id: 4,
        seq: 3,
        symbols: [7],
        logic: 3,
        // logic: [threeSeqEqual(7)],
        amount: 700
    }, {
        id: 5,
        seq: 5,
        symbols: [6, 11],
        logic: 5,
        // logic: [fiveSymbolsOrWild(6), fiveSymbolsOrWild(11)],
        amount: 500
    }, {
        id: 6,
        seq: 4,
        symbols: [5],
        logic: 2,
        // logic: [fourSeqEqual(5)],
        amount: 400
    }, {
        id: 7,
        seq: 5,
        symbols: [10],
        logic: 7,
        // logic: [fiveSymbolsOrWild(5)],
        amount: 250
    }, {
        id: 8,
        seq: 5,
        symbols: [4],
        logic: 5,
        // logic: [fiveSymbolsOrWild(4)],
        amount: 200
    }, {
        id: 9,
        seq: 5,
        symbols: [0, 3, 2, 9],
        logic: 5,
        // logic: [fiveSymbolsOrWild(0), fiveSymbolsOrWild(3), fiveSymbolsOrWild(2), fiveSymbolsOrWild(9)],
        amount: 185
    },
    {
        id: 10,
        seq: 4,
        symbols: [8],
        logic: 6,
        // logic: [fourSymbolsOrWild(8)],
        amount: 150
    },
    {
        id: 11,
        seq: 3,
        symbols: [5],
        logic: 3,
        // logic: [threeSeqEqual(5)],
        amount: 100
    },
    {
        id: 12,
        seq: 4,
        symbols: [6, 11],
        logic: 6,
        // logic: [fourSymbolsOrWild(6), fourSymbolsOrWild(11)],
        amount: 75
    },
    {
        id: 13,
        seq: 2,
        symbols: [5],
        logic: 4,
        // logic: [twoFreeSpins()],
        amount: 60
    },
    {
        id: 14,
        seq: 5,
        symbols: [4, 10],
        logic: 6,
        // logic: [fourSymbolsOrWild(4), fourSymbolsOrWild(4)],
        amount: 50
    },
    {
        id: 15,
        seq: 3,
        symbols: [6, 11],
        logic: 7,
        // logic: [threeSymbolsOrWild(6), threeSymbolsOrWild(11)],
        amount: 30
    },
    {
        id: 16,
        seq: 5,
        symbols: [0, 3, 2, 9],
        logic: 6,
        // logic: [fourSymbolsOrWild(0), fourSymbolsOrWild(3), fourSymbolsOrWild(2), fourSymbolsOrWild(9)],
        amount: 30
    },
    {
        id: 17,
        seq: 3,
        symbols: [8],
        logic: 7,
        // logic: [threeSymbolsOrWild(8)],
        amount: 25
    },
    {
        id: 18,
        seq: 3,
        symbols: [10],
        logic: 7,
        // logic: [threeSymbolsOrWild(10)],
        amount: 15
    },
    {
        id: 19,
        seq: 3,
        symbols: [4],
        logic: 7,
        // logic: [threeSymbolsOrWild(4)],
        amount: 10
    },
    {
        id: 20,
        seq: 3,
        symbols: [0, 3, 2, 9],
        logic: 7,
        // logic: [threeSymbolsOrWild(0), threeSymbolsOrWild(3), threeSymbolsOrWild(2), threeSymbolsOrWild(9)],
        amount: 5
    }
]