const fs = require('fs')

/**
 * @param {string} classNumber - The number of the yolo class which contains the coordinates. Example: "16".
 * @param {string} txtFilePath - The path to the .txt file with the coordinates.
 * @returns {array} The 4 position array with the coordinates. Example: [ '0.235185', '0.381657', '0.396296', '0.727811' ]
 */
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