
let myPow = function (x,n) {
    if (x === 0) return 0;
    let b = n;
    let res = 1;
    if (b < 0) {
        n = 1 / n;
        b = -b;
    }
    
    while (b > 0) {
        if ((b & 1) === 1) res *= x;
        x *= x;
        b >>>= 1;
    }
    return res;
}
console.log(myPow(2,2));