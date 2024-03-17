const sumAll = function (x, y) {
    if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number") {
        return "ERROR"
    }
    let total = 0
    if (x < y) {
        for (let i = x; i <= y; i++) {
            total += i
        }
    }
    else {
        for (let i = y; i <= x; i++) {
            total += i
        }
    }
    return total
}

// Do not edit below this line
module.exports = sumAll;
