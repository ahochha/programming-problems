/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    var words = s.match(/\S+/g);
    
    if (words) {
        var retString = "";
        
        for (var i = words.length - 1; i >= 0; i--) {
            retString += (words[i] + " ");
        }
        
        retString = retString.trim();
        return retString;
    }
    else {
        return "";
    }
};