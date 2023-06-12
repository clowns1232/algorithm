function solution(sequence, k) {
  const answer = [0, 1000000];
  let [left, right] = [0, 0];
  let sum = sequence[0];
  while (right < sequence.length) {
    if (sum === k) {
      // 길이가 짧은 수열이 여러 개일 경우 대비
      if (answer[1] - answer[0] > right - left) {
        answer[0] = left;
        answer[1] = right;
      }
      sum -= sequence[left++];
      sum += sequence[++right];
    }
    // 크면 left 증가
    else if (sum > k) sum -= sequence[left++];
    // 같으면 right 증가
    else if (sum < k) sum += sequence[++right];
  }
  return answer;
}
