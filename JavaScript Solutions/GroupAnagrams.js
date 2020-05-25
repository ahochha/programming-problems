/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    var word = "";
    var key = 0;
    var wordMap = {};
    
    for(var i = 0; i < strs.length; i++) {
        word = strs[i];
        key = word.split('').sort().join('');

        wordMap[key] = wordMap[key] || [];
        wordMap[key].push(word);
    }

    var retArray = Object.keys(wordMap).map((key) => {
        return wordMap[key];
    })

    return retArray;
};