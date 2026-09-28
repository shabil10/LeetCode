/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let str = String(x)
    let revered = str.split("").reverse().join("")

    if(str == revered){
        return true
    }
    else{
        return false
    }
};