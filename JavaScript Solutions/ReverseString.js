/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    var front = 0;
    var back = s.length - 1;
    
    while (front <= back) {
        [s[front], s[back]] = [s[back], s[front]];
        front++;
        back--;
    }
};