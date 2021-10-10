/**
 * 二叉搜索树与双向链表
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
 */
/**
* // Definition for a Node.
* function Node(val,left,right) {
*    this.val = val;
*    this.left = left;
*    this.right = right;
* };
*/
/**
 * @param {Node} root
 * @return {Node}
 */
let treeToDoublyList = function(root) {
    if (!root) return root;
    let head, pre;
    dfs(root);
    head.left = pre; // 首节点的前节点就是pre，遍历完之后pre就是尾结点
    pre.right = head; // 尾结点的下一个节点就是head
    return head;

    // 使用中序遍历
    function dfs(cur) {
        if (!cur) return;
        dfs(cur.left);
        if (pre) {
            pre.right = cur; // pre.right 要指向下一个节点，就是cur
        } else {
            head = cur; // pre不存在时就是用head指向第一个节点
        }
        cur.left = pre; // 当前节点要指向前一个节点，pre
        pre = cur;
        dfs(cur.right);
    }


};