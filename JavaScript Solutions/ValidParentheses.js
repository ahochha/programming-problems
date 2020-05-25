/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    var charMap = {")": "(", "]": "[", "}": "{"};
    var stack = [];
    for (let c of s) {
        if (c in charMap) {
            var top = "#";
            if (stack.length > 0) {
                top = stack.pop();
            }
            
            if (charMap[c] != top) {
                return false;
            }
        }
        else {
            stack.push(c);
        }
    }
    
    return stack.length == 0;
};