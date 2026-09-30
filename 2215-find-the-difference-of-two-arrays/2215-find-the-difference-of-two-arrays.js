/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let first = [];
    let second = [];

    for (let num of nums1) {
        if (!nums2.includes(num) && !first.includes(num)) {
            first.push(num);
        }
    }

    for (let num of nums2) {
        if (!nums1.includes(num) && !second.includes(num)) {
            second.push(num);
        }
    }

    return [first, second];
};