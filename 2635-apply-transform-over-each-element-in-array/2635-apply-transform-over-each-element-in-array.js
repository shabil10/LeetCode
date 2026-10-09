/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    let result = [];
    arr.forEach((value,i)=>{
        result.push(fn(value,i))
    })

    return result;

};
