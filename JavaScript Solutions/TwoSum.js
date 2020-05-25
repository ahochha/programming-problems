/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var hashMap = {};
    
    for(var i = 0; i < nums.length; i++) {
        if (hashMap[target - nums[i]] != undefined) {
            return [hashMap[target - nums[i]], i];
        }
        
        hashMap[nums[i]] = i;
    }
    
    return [-1, -1];
};