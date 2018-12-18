function getPayout(winLines) {
    //sum up the win lines and return the win amount
    if (winLines.length < 1) {
        return 0;
    } else {
        return total = winLines.reduce(function(sum, x) {
            return sum + x.amount;
        });
    }
}