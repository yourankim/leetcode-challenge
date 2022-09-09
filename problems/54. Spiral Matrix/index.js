/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let maxRight = n - 1;
  let minLeft = 0;
  let minTop = 1; // 맨 첫줄부터 시작하니까 minTop은 처음부터 1이 되는게 맞다!!
  let maxBottom = m - 1;

  let x = 0;
  let y = 0;
  let direction = 'R';

  const answer = [matrix[x][y]];

  while (answer.length < m * n) {
    console.log(direction);
    console.log(x, y);
    switch (direction) {
      case 'R':
        while (y < maxRight) {
          answer.push(matrix[x][++y]);
        }
        maxRight--;
        direction = 'D';
        break;
      case 'D':
        while (x < maxBottom) answer.push(matrix[++x][y]);
        maxBottom--;
        direction = 'L';
        break;
      case 'L':
        while (y > minLeft) answer.push(matrix[x][--y]);
        minLeft++;
        direction = 'U';
        break;
      case 'U':
        while (x > minTop) answer.push(matrix[--x][y]);
        minTop++;
        direction = 'R';
    }
    console.log(
      `minLeft: ${minLeft}, maxRight: ${maxRight}, minTop: ${minTop}, maxBottom: ${maxBottom}`
    );
    console.log(answer);
  }
  return answer;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
spiralOrder(matrix);

// 내일은 이걸 typescript로 바꿔보자
