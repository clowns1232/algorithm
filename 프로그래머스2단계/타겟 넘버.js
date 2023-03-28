function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(x, value) {
    if (x < numbers.length) {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }

  console.log(answer);
  return answer;
}

solution([1, 1, 1, 1, 1], 3);
