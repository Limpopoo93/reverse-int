module.exports = function reverse (n) {
  let result = '';
    for (let i = 0; i < n.toString().length; i++) {
        result = n.toString()[i] + result;
    }
    return parseInt(result);
}
