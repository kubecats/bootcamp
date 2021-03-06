// p331

const express = require("express");
const app = express();
// console.log(app.get("env"));

// console.log(process.env);
require("dotenv").config({ path: "mysql/.env" });
require("dotenv").config({ path: `mysql/.env` });
// console.log(process.env);

// index.js가 생략되어있어도 /mysql/index.js 를 가져온다는 의미와 동일함
const mysql = require("./mysql");

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.get("/api/product/category", async (req, res) => {
  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});

app.get("/api/product/category2", async (req, res) => {
  const categoryList = await mysql.query("categoryList2");
  res.send(categoryList);
});

app.post("/api/product/category", async (req, res) => {
  const result = await mysql.query("categoryInsert", req.body.param);
  res.send(result);
});

app.put("/api/product/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryUpdate", [
    req.body.param,
    product_category_id,
  ]);
  res.send(result);
});

app.delete("/api/product/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryDelete", product_category_id);
  res.send(result);
});
