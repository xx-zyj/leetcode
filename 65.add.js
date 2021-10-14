/**
 * 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 对位数算不熟悉的我
var add = function(a, b) {
    while(b != 0) { // 当进位为 0 时跳出
        let c = (a & b) << 1;  // c = 进位
        a ^= b; // a = 非进位和
        b = c; // b = 进位
    }
    return a;
};