/**
 * 최초 풀이: 열린 괄호는 stack에 담고 닫힌 괄호가 나오면 stack에서 하나씩 꺼내어 짝이 맞는지 확인
 * Runtime: 84 ms / Memory Usage: 39.4 MB
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === "[" || c === "(" || c === "{") {
      stack.push(c);
      continue;
    }
    if (stack.length < 1) return false;
    const top = stack.pop();
    if (
      (c === "]" && top !== "[") ||
      (c === ")" && top !== "(") ||
      (c === "}" && top !== "{")
    ) {
      return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};

/**
 * 리팩토링1: stack에 닫힌 괄호로 바꾸어 넣으면 짝을 맞추는 코드가 간결해짐
 * (Discuss의 여러 솔루션 참조)
 * Runtime: 80 ms / Memory Usage: 38.4 MB
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === "(") stack.push(")");
    else if (c === "{") stack.push("}");
    else if (c === "[") stack.push("]");
    else {
      const top = stack.pop();
      if (c !== top) return false;
    }
  }
  return stack.length < 1;
};

/**
 * 리팩토링2: 닫힌 괄호와 짝이 되는 열린 괄호를 key-value로 저장해서 사용
 * (Solution 코드 참조)
 * Runtime: 76 ms / Memory Usage: 38.5 MB
 * @param {string} s
 * @return {boolean}
 */
var isValid3 = function (s) {
  const stack = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (!map.has(c)) {
      stack.push(c);
      continue;
    }
    const top = stack.pop();
    if (top !== map.get(c)) return false;
  }
  return stack.length < 1;
};
