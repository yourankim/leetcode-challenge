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
