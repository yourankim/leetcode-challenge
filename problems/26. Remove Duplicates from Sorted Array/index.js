/**
 * 설명이 애매했던 문제. 중복값을 지우되 추가 공간을 사용하지 않고 주어진 배열을 수정해야 하는
 * in-place 문제였으나 배열이 아닌 배열 길이만 반환하도록 되어 있었다.
 * 배열에서 요소를 하나씩 pop하면서 새로운 값이 나타날 때만 stack에 넣고 nums의 길이가 0이 되면 다시
 * stack의 요소들을 nums로 옮기는 방법으로 풀었는데 더 좋은 방법이 있을지 궁금하다.
 *
 * 84ms / 40.8MB
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let curval = Number.MIN_SAFE_INTEGER;
  let stack = [];
  while (nums.length > 0) {
    const top = nums.pop();
    if (top === curval) continue;
    stack.push(top);
    curval = top;
  }
  while (stack.length > 0) {
    nums.push(stack.pop());
  }
};
