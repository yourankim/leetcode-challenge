/**
 * 1. recursion: 80ms / 38.6MB
 * @param {*} digits
 * @param {*} targetIndex
 * @returns
 */

var plus = function (digits, targetIndex) {
  if (digits[targetIndex] < 9) {
    digits[targetIndex]++;
    return digits;
  }
  digits[targetIndex] = 0;
  if (targetIndex > 0) {
    return plus(digits, targetIndex - 1);
  } else {
    return [1, ...digits];
  }
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return plus(digits, digits.length - 1);
};

/**
 *
 * 2. iteration: 80ms / 37.8MB
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  if (digits[index] < 9) {
    digits[index]++;
    return digits;
  }
  while (index >= 0 && digits[index] === 9) {
    digits[index] = 0;
    if (index > 0 && digits[index - 1] < 9) {
      digits[index - 1]++;
      break;
    }
    index--;
  }
  return digits[0] === 0 ? [1, ...digits] : digits;
};

/**
 * 2-1. iteration refactoring: 80ms / 38.6MB
 *
 * 다른 사람들의 풀이를 보고 고쳐봤는데 성능상으로는 큰 차이가 없었지만
 * 훨씬 간단명료한 코드가 된 것 같다.
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  while (digits[index] === 9) {
    digits[index--] = 0;
  }
  if (index === -1) digits.unshift(1);
  else digits[index]++;

  return digits;
};
