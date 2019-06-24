const sum = (a, b) => {
    return a + b;
  }

const uuidv4 = require('uuid/v4');
const uuid = () => {
    return typeof uuidv4()
}

module.exports = { sum, uuid };