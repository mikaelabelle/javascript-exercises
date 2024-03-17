const reverseString = function (inputString) {
    let letters = inputString.split("");
    let reverseArray = []
    for (let i = 0; i < letters.length; i++) {
        reverseArray.unshift(letters[i])
    }
    let reverseString = reverseArray.join("")
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
