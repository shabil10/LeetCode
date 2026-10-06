/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let seen = new Set();

    while (n !== 1) {

        if (seen.has(n)) {
            return false;
        }

        seen.add(n);

        let sum = 0;

        for (let digit of String(n)) {
            let num = Number(digit);
            sum += num * num;
        }

        n = sum;
    }

    return true;
};