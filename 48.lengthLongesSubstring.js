/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    // 双指针 + 哈希表
    let res = 0,left = 0, right = 0, n = s.length;
    const map = new Map();


    while (right < n) {
        let val = s.charAt(right);
        if (map.has(val)) {
            map.delete(s.charAt(left));
            left++;
        } else {
            map.set(val,right);
            right++;
            res = Math.max(res,right - left);
        }

    }

    return res;

};
console.log(lengthOfLongestSubstring("pwwkew"))