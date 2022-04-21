const express = require("express");
const app = express();
require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql");
const uuidAPIKey = require("uuid-apikey");

// console.log(uuidAPIKey.create());
const accessKey = {
  apiKey: "5SQ4ATK-C3QMNFW-PCVEYH6-5GPSF38",
  uuid: "2e6e456a-60ef-4abf-b336-ef442c2d978d",
};

app.listen(3001, () => {
  console.log("API 서버가 3001번 포트로 시작되었습니다.");
});

app.get("/api/:apiKey/category", async (req, res) => {
  if (uuidAPIKey.toUUID(req.params.apiKey) !== accessKey.uuid) {
    console.log("비정상적인 API KEY를 사용했습니다.");
    return res.send("Access Denied!");
  }

  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});
