/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let w=s.trim().split(" ")
    let g=w[w.length-1].length
    return g
};