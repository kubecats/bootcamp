const fs = require("fs");

// filesystem
// 비동기식 읽기
fs.readFile("./sample/text.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// 동기식 읽기
const data = fs.readFileSync("./sample/text.txt", "utf-8");
console.log(data);

// 비동기식 읽기
const txt = "파일 쓰기 테스트";
fs.writeFile("./sample/text_w.txt", txt, "utf8", (err) => {
  if (err) {
    throw err;
  }
  const data2 = fs.readFileSync("./sample/text_w.txt", "utf-8");
  console.log(data2);
});

// 동기식 쓰기
fs.writeFileSync("./sample/text_w.txt", txt, "utf8");
