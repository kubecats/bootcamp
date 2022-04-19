// cors - Cross-Origin Resource Sharing
//  Origin - URL 구조의 프로토콜, 호스트, 포트를 합친것.
// origin 주소가 다르더라도 자원을 요청할 수 있게끔 해줌

const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정, client의 origin인 경우
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Ok");
});

const corsOptions2 = {
  origin: "http://localhost:8081", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

// 이 라우터로만 cors가 적용되게끔 적용
app.get("/products/:id", cors(corsOptions2), (req, res) => {});

app.listen(3000, function () {
  console.log("3000번 포트로 서버 실행.");
});
