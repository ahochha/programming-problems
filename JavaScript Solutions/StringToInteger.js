/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
    var upperBound = Math.pow(2, 31) - 1;
    var lowerBound = Math.pow(-2, 31);
    var match = str.match(/^\s*[\+\-]?\d+/);
    var retNum = (match) ? Number(match[0]) : 0;
    
    if (retNum > upperBound) {
        retNum = upperBound;
    }
    
    if (retNum < lowerBound) {
        retNum = lowerBound;
    }
    
    return retNum;
};