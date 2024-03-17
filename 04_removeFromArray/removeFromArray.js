const removeFromArray = function (inputArray, ...args) {
    const result = inputArray.filter((input) => !args.includes(input))
    return result
};

// console.log(removeFromArray([1, 2, 3, 4], 4, 3))

// Do not edit below this line
module.exports = removeFromArray;
