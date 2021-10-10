/**
 * 扑克牌中的狮子
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    const set = new Set();
    let max = 0; // 把最大值设为0
    let min = 14; // 把最小值设为14
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) continue;
        max = Math.max(num,max);
        min = Math.min(num,min);
        if (set.has(num)) return false; // 如果有重复的值就false
        set.add(num);
    }
    return max - min < 5; // 最大值 - 最小值要小于5
};

console.log(isStraight([1,2,3,4,5]));