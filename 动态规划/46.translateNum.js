/**
 * 剑指offer46：把数字翻译成字符串
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
/**
 * @param {number} num
 * @return {number}
 */
let translateNum = function(num) {
    const s = String(num);
    let a = 1;
    let b = 1;
    for (let i = 2; i <= s.length; i++) {
        let val = s.substring(i-2,i);
        let c = (val >= 10 && val <= 25) ? a + b : a;
        b = a;
        a = c;
    }
    return a;
};

console.log(translateNum(25))