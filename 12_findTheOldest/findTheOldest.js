const findTheOldest = function (array) {
    let sorted = array.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear()
        }
        else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear()
        }

        let aAge = a.yearOfDeath - a.yearOfBirth
        let bAge = b.yearOfDeath - b.yearOfBirth

        return aAge > bAge ? -1 : 1

    })

    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
