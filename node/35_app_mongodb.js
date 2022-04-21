const express = require("express");
require("dotenv").config({ path: "mongodb/.env" });
const mongoDB = require("./mongodb");
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("3000번 포트로 서버가 시작되었습니다.");
});

app.get("/api/customers", async (req, res) => {
  const customers = await mongoDB.find("customers");
  res.send(customers);
});

app.get("/api/customers/:_id", async (req, res) => {
  const customer = await mongoDB.findById("customers", req.params._id);
  res.send(customer);
});

app.post("/api/customer", async (req, res) => {
  const r = await mongoDB.insertOne("customers", req.body.params);
  res.send(r);
});

app.post("/api/customers", async (req, res) => {
  const r = await mongoDB.insertMany("customers", req.body.params);
  res.send(r);
});
