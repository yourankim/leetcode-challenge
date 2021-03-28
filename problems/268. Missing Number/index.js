/**
 *
 * 1. 가우스 덧셈 법칙을 이용한 풀이
 * 84ms / 40.9MB
 *
 * 값의 범위는 항상 0~num.length이고 missing number는 한 개, 중복된 값이 없다는 분명한 조건이
 * 있었기 때문에 전체 값을 더해보면 빠진 숫자가 무엇인지 금방 알아낼 수 있었다.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  return (
    ((1 + nums.length) * nums.length) / 2 - nums.reduce((acc, cur) => acc + cur)
  );
};
