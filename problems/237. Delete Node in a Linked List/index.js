/**
 *
 * 싫어요 갯수가 압도적인 문제.
 * 내가 푼 방법이 솔루션의 설명과 동일했는데, 이렇게 풀면 노드가 삭제되는 게 아니라
 * 연결이 끊어진 나머지 노드들이 남아있어서 메모리 관리에 적절하지 않다는
 * 의견들이 있었다. (반면 연결고리가 끊어진 노드들은 가비지 콜렉터가 관리하니 문제없다는
 * 의견들도 있었는데 짧은 영어와 관련 지식으로 정확한 이해가 어려웠음. 다시 읽어보자.)
 *
 * 이번 주(2021.03 마지막주)에 푼 문제들은 모두 싫어요 갯수가 많아서 Top interview questions에는 포함되지만
 * Top liked questions에는 들지 못한 것들인데, 왜 나쁜 평가를 받았는지 보니 in-place 문제이고
 * 문제 정의 자체가 모호한 부분이 있어서 혼란을 불러왔다는 공통점이 있었다.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
