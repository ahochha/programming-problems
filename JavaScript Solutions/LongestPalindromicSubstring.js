/**
 * @param {string} s
 * @return {string}
 */

var expandFromCenter = function(s, left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    
    return right - left - 1;
}

var longestPalindrome = function(s) {
    var long1 = 0;
    var long2 = 0;
    var start = 0;
    var end = 0;
    
    if(s.length < 1) {
        return "";
    }
    
    for(var i = 0; i < s.length; i++) {
        long1 = expandFromCenter(s, i, i);
        long2 = expandFromCenter(s, i, i + 1);    
        var len = Math.max(long1, long2);
        
        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2);
            end = i + len / 2;
        }
    }
    
    return s.slice(start, end + 1);
};