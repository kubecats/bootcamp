const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// ? 바로 앞에 있는 문자가 0개 혹은 1개 / abcd, /acd
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// + 앞에 있는 문자가 무조건 1개 이상 있음 /abcd, abbcd, abbbcd
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

// 경로에 a가 포함되어 있기만 한다면 다 걸림
app.get(/a/, (req, res) => {
  res.send("/a/");
});

// ^insert
app.get(/^insert/, (req, res) => {
  res.send("/^insert/");
});
