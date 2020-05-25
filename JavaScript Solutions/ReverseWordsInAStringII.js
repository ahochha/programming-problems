/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseWords = function(s) {
    var start= 0;
    var end = 0;
    s.reverse();
    
    while (start < s.length) {
        while ((end < s.length) && (s[end] != " ")) {
              end++; 
        }
        
        var f = start;
        var b = end - 1;
        
        while (f < b) {
            [s[f], s[b]] = [s[b], s[f]];
            f++;
            b--;
        }
        end++;
        start = end;
    }
};