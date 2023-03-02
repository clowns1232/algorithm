function solution(phone_number = "") {
  let start = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    start += "*";
  }
  return (
    start + phone_number.split("").slice(-4).toString().replaceAll(",", "")
  );
}
