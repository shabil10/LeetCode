var singleNumber = function(nums) {
    let count = {};

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] === 1) {
            return Number(num);
        }
    }
};