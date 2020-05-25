interface IHash {
    [key: number]: number;
}

function twoSum (nums: Array<number>, target: number): Array<number> {
    let num_dict: IHash = {};

    for (let i = 0; i < nums.length; i++){
        if (num_dict[target - nums[i]] != undefined){
            return [num_dict[target - nums[i]], i];
        }
        num_dict[nums[i]] = i;
    }

    return [-1, -1];
}