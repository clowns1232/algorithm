function solution(park = [], routes = []) {
  let Eend = park[0].length;
  let Nend = park.length;
  let dog = null;
  for (let i = 0; i < park.length; i++) {
    const dogCheck = [...park[i]].findIndex((map) => map === "S");
    if (dogCheck > -1) {
      dog = [i, dogCheck];
      break;
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const direction = routes[i][0];
    const number = routes[i][2] * 1;
    let isGo = true;
    switch (direction) {
      case "N":
        (function () {
          let check = dog[0];
          for (let i = 0; i < number; i++) {
            check -= 1;
            if (check === -1) {
              isGo = false;
              break;
            }
            const map = park[check][dog[1]];

            if (map === "X") {
              isGo = false;
              break;
            }
          }
          if (isGo) {
            dog[0] = check;
          }
        })();
        break;
      case "E":
        (function () {
          let check = dog[1];
          for (let i = 0; i < number; i++) {
            check += 1;
            if (Eend === check) {
              isGo = false;
              break;
            }
            const map = park[dog[0]][check];
            if (map === "X") {
              isGo = false;
              break;
            }
          }
          if (isGo) {
            dog[1] = check;
          }
        })();
        break;
      case "S":
        (function () {
          let check = dog[0];
          for (let i = 0; i < number; i++) {
            check += 1;
            if (Nend === check) {
              isGo = false;
              break;
            }
            const map = park[check][dog[1]];
            if (map === "X") {
              isGo = false;
              break;
            }
          }
          if (isGo) {
            dog[0] = check;
          }
        })();
        break;
      case "W":
        (function () {
          let check = dog[1];
          for (let i = 0; i < number; i++) {
            check -= 1;
            if (check === -1) {
              isGo = false;
              break;
            }
            const map = park[dog[0]][check];
            if (map === "X") {
              isGo = false;
              break;
            }
          }
          if (isGo) {
            dog[1] = check;
          }
        })();
        break;
      default:
        break;
    }
  }
  return dog;
}

solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]);
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1", "S 4"]);
