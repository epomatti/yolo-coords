const fs = require('fs')

function coords(classNumber, txtFilePath) {
    const txt = fs.readFileSync(txtFilePath).toString()
    const array = txt.split("\n")
    for (const coordinates of array) {
        const values = coordinates.split(" ")
        if (values[0] === classNumber) {
            return [values[1], values[2], values[3], values[4]]
        }
    }
    throw `Did not found class [${classNumber}] in file [${txtFilePath}]`
}

module.exports = coords;