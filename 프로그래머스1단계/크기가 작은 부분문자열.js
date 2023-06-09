function solution(t = "", p = "") {
  const sample = [];
  const pArr = p.split("");
  const tArr = t.split("");
  for (let i = 0; i < tArr.length - pArr.length + 1; i++) {
    sample.push(tArr.slice(i, pArr.length + i));
  }
  return sample.filter((item) => {
    return item.join("") * 1 <= p * 1;
  }).length;
}
