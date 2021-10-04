/**
 * 剑指offer47： 礼物的最大价值
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 *
 * 递推公式：最大价值的礼物设为f(i,j),从f(i-1,j)和f(i,j-1)中挑选最大的价值礼物 + 当前礼物的价值
 *          f(i,j) = Max[f(i-1,j),f(i,j-1)] + grid(i,j)

 * 分析：
 * 1.定义状态：设动态规划矩阵dp[i][j]，dp(i,j)代表从棋盘的左上角开始，到达单元格(i,j)时能拿到礼物的最大累计价值
 * 2.转移方程：dp[i][j] = {
 *     grid[i][j]                   (i === 0 && j === 0)   起始元素
 *     grid[i][j] + dp[i][j-1]      (i === 0 && j !== 0)   矩阵的第一行，只可从左边到达
 *     grid[i][j] + dp[i-1][j]      (i !== 0 && j === 0)   矩阵的第一列，只可从上边到达
 *     grid[i][j] + Math.max(dp[i-1][j],dp[i][j-1])    (i !=== 0 && j !=== 0) 可左可上到达
 *
 * }
 * 3.初始化条件：dp[0][0] = grid[0][0]，从单元格的(0,0)开始
 * 4.返回值：dp[m-1][n-1]， m矩阵的行高，n矩阵的列宽，即返回dp矩阵右下角元素
 *
 */

/**
 * 复杂度分析：
 * 时间复杂度：M,N分别为行高和列表，需要遍历整个grid，所以时间复杂度是O(MN)
 * 空间复杂度：由于可以使用原矩阵grid作为dp矩阵，原地修改数据大小，所以空间复杂度是O(1)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

let maxValue = function(grid) {
   const m = grid.length;
   const n = grid[0].length;

   for (let i = 0; i < m; i++) {
       for (let j = 0; j < n; j++) {
           if (i === 0 && j === 0) continue;
           if (i === 0) {
               grid[i][j] += grid[i][j-1];
           } else if (j === 0) {
               grid[i][j] += grid[i-1][j];
           } else {
               grid[i][j] += Math.max(grid[i-1][j],grid[i][j-1]);
           }
       }
   }

   return grid[m-1][n-1];

};

const grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
]

console.log(maxValue(grid));