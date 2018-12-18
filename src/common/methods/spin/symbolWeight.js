function symbolWeight(rand) {
    if (rand < 501) {
        // Lvl1
        switch (getRandomInt(1, 5)) {
            case 1:
                return 0; // sym1
            case 2:
                return 1; // sym2
            case 3:
                return 2; // sym3
            case 4:
                return 3; // sym4
        }
    } else if (rand < 651) {
        // Lvl2
        return 4; // sym5
    } else if (rand < 751) {
        // Lvl3
        return 5; // sym6
    } else if (rand < 811) {
        // Lvl4
        return 6; // sym7
    } else if (rand < 871) {
        // Lvl5
        return 7; // sym8
    } else if (rand < 911) {
        // Lvl5
        return 8; // sym9
    } else if (rand < 951) {
        // Lvl0
        return 11; // sym13 //Bonus
    } else if (rand < 981) {
        // Lvl6
        // console.log('Free Spins')
        return 10; // sym11
    } else {
        // Lvl7
        return 9; // sym10
    }
}