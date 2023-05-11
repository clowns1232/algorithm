function solution(book_time = []) {
  // 입장 순서로 정렬
  const sort = book_time.sort((a, b) => {
    const aTime = parseInt(a[0].split(":")[0] + a[0].split(":")[1]);
    const bTime = parseInt(b[0].split(":")[0] + b[0].split(":")[1]);
    if (aTime < bTime) {
      return -1;
    } else if (aTime > bTime) {
      return 1;
    } else {
      return 0;
    }
  });
  // 정렬된 순서로 하나하나 저장
  const test = sort.reduce((acc, cur) => {
    const aTime = parseInt(cur[0].split(":")[0] + cur[0].split(":")[1]);
    const bTime = parseInt(cur[1].split(":")[0] + cur[1].split(":")[1]);
    // 처음은 무조건 저장
    if (acc.length === 0) {
      acc.push([aTime, bTime]);
      return acc;
    }
    for (let i = 0; i < acc.length; i++) {
    // 저장된 배열 중 마지막 퇴근 값에서 10 더함
      let check = acc[i][acc[i].length - 1];
      if ((check + "").split("")[(check + "").split("").length - 2] === "5")
        check += 50;
      else check += 10;

      // 들어온 시작 값에서 10 뻄
      let check1 = aTime;
      if ((check1 + "").split("")[(check1 + "").split("").length - 2] === "0")
        check1 -= 50;
      else check1 -= 10;

      // 마지막 퇴근값이라 들어온 값 비교 -10 || +10
      if (check <= aTime || check1 >= acc[i][acc[i].length - 1]) {
        acc[i].push(aTime, bTime);
        return acc;
      }
    }
    acc.push([aTime, bTime]);
    return acc;
  }, []);
  return test.length;
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);

// solution([
//   ["09:10", "10:10"],
//   ["10:20", "12:20"],
// ]);
solution([
  ["10:09", "10:59"],
  ["11:00", "12:10"],
]);
