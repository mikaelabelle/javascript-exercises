const fibonacci = function (num) {
    input = parseInt(num) - 1

    if (num < 0) {
        return "OOPS"
    }
    else if (num == 0) {
        return 0
    }

    let fibo = [1, 1]
    for (let i = 1; i <= input; i++) {
        fibo.push(fibo[i] + fibo[i - 1])
    }

    return fibo[input]
};

console.log(fibonacci("1"))

// Do not edit below this line
module.exports = fibonacci;
