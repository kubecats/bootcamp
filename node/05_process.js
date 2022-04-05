// import process from "process";
// module 방식이 아니어서 에러가 났음

// const { process } = require("process");
//
const process = require("process");

process.on("beforeExit", (code) => {
  // 이벤트루프에 등록된 작업이 모두 종료되고 노드프로세스가 종료되기 직전
  console.log("beforeExit 이벤트 리스터", code);
});

// process.exit();

process.on("exit", (code) => {
  console.log("exit 이벤트 리스터", code);
});

console.log("출력");
