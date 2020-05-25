/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    var filteredString = "";
    
    for(var i = 0; i < s.length; i++) {
        if (s[i].match(/\w/)) {
            filteredString += s[i].toLowerCase();
        }
    }
    
    var front = 0;
    var back = filteredString.length - 1;
    
    while (front <= back) {
        if (filteredString[front] != filteredString[back]) {
            return false;
        }
        
        front++;
        back--;
    }
    
    return true;
};