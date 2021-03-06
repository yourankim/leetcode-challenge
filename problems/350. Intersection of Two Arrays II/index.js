/**
 *
 * 1. Hash Table 이용: 96ms, 41.1MB
 * num2에서 map에 존재하는 key인지 검증할 때 value가 0이 되면 삭제해야 한다.(line 19)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = [];
  const map = new Map();
  nums1.forEach((n) => {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  });
  for (let i = 0; i < nums2.length; i++) {
    if (!map.has(nums2[i])) continue;
    if (map.get(nums2[i]) === 1) {
      map.delete(nums2[i]);
    } else {
      map.set(nums2[i], map.get(nums2[i]) - 1);
    }
    result.push(nums2[i]);
  }
  return result;
};

/**
 *
 * 2. sort 이용: 84ms, 39.5MB
 * 문제에서 제시된 첫번째 follow up
 * "What if the given array is already sorted? How would you optimize your algorithm?"
 * 에 따라 주어진 배열을 정렬하여 풀어보았다.
 * 자바스크립트의 Array.sort()는 기본적으로 요소를 문자열로 변환하여 정렬한다.
 * 따라서 숫자 기준으로 정렬하려면 compareFunction를 정의해 아규먼트로 넘겨야 한다.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i1 = 0,
    i2 = 0;
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      i1++;
    } else if (nums1[i1] > nums2[i2]) {
      i2++;
    } else {
      result.push(nums1[i1]);
      i1++;
      i2++;
    }
  }
  return result;
};
