const palindromes = function (input) {
    let inputChar = input.replace(/[.,\/#!$%\^&\*\s;:{}=\-_`~()]/g, "").toLowerCase()
    let split = [...inputChar]
    let reversed = []
    for (let i = 0; i < split.length; i++) {
        reversed.unshift(split[i])
    }
    let counter = 0
    for (let i = 0; i < split.length; i++) {
        reversed[i] != split[i] ? counter++ : null
    }
    return counter === 0 ? true : false

};

// Do not edit below this line
module.exports = palindromes;
