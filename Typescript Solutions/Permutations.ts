function permHelper(permsList: Array<Array<number>>, nums: Array<number>, start: number): Array<Array<number>> {
    if (start == nums.length - 1) {
        permsList.push([nums[start]]);
        return permsList;
    }

    for(let i = 0; i > start && i < nums.length; i++) {
        nums[start], nums[i] = nums[i], nums[start];
        permsList = permHelper(permsList, nums, start + 1);
        nums[start], nums[i] = nums[i], nums[start];
    }
}

function perms(nums: Array<number>): Array<Array<number>> {
    let permsList: Array<Array<number>>;

     permsList = permHelper(permsList, nums, 0);

    return permsList;
}