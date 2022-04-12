const express = require("express");
const app = express();

require("dotenv").config({ path: `mysql/.env.test` });
const mysql = require("./mysql");

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// alias로 써서 http://localhost:3000/api/categoryList 이런식으로 쓸수 있다.
// app.post로 한번에 다 구성할 수도 있다.
app.get("/api/:alias", async (req, res) => {
  const categoryList = await mysql.query(req.params.alias);
  res.send(categoryList);
});
