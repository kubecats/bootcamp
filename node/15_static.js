const express = require("express");
const app = express();

// http://localhost:3000/images/kubecat.jpeg 로 이미지가 바로 떨어짐
// app.use(express.static("public"));

// http://localhost:3000/static/images/kubecat.jpeg
// front에서 보게할때 사용
app.use("/static/images", express.static("uploads"));

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
