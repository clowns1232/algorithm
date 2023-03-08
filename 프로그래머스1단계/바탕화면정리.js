function solution(wallpaper = []) {
  let maxRow = 0;
  let maxCol = 0;
  let minRow = 51;
  let minCol = 51;

  let row = wallpaper.length;
  let col = wallpaper[0].length;
  console.log(maxRow);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (wallpaper[i][j] === "#") {
        minRow = Math.min(minRow, i);
        minCol = Math.min(minCol, j);
        maxRow = Math.max(maxRow, i);
        maxCol = Math.max(maxCol, j);
      }
    }
  }

  return [minRow, minCol, maxRow + 1, maxCol + 1];
}

console.log(solution([".#...", "..#..", "...#."]));
console.log(solution(["..", "#."]));
