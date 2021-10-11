/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 */

let sumNums = (n) => {
    // 使用逻辑运算符的短路效应
    let res = 0;
    sum(n);
    return res;
    
    function sum (n) {
        const x = n > 1 && sum(n - 1) > 0;
        res += n;
    }
}