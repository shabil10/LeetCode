/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let S = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let H = S.split("").reverse().join("")
    if(S===H){
        return true;
    }
    return false;
};