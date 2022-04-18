//job scheduler
// 정해진 날짜 시/분/초에 어떤 작업을 수행하라고 미리 등록해 놓는 것
// 특정 주기마다 어떤 작업을 수행하라고 미리 등록해 놓는 것
// 1.데이터 백업: 매일 밤 12시, 새벽 1시, 사용자가 시스템을 사용하지 않는 시간동안 중요한 데이터/파일을 백업해 놓는 것
// 2. 정기 리포트: 매일, 매주, 매월 특정 기간동안 생성된 데이터를 리포트(표/엑셀) 로 담당자에게 전달
// 3. 일정 관리: 등록된 일정에 맞춰서 알림 전송,

const cron = require("node-cron");
cron.schedule("* * * * * *", () => {
  console.log("1초 마다 작업이 실행 됩니다.");
});

cron.schedule("* * * * *", () => {
  console.log("1분마다 작업이 실행됩니다.");
});

cron.schedule("2 * * * *", () => {
  console.log("매 시간의 2분마다 작업이 실행됩니다."); //8시 2분, 9시 2분, 10시 2분
});

cron.schedule("1,2,4,5 * * * *", () => {
  console.log("매 시간의 1,2,4,5분마다 작업이 실행됩니다."); //8시 1분, 2분, 4분, 5분, 9시 1분, 2분, 4분, 5분
});

cron.schedule("1-5 * * * *", () => {
  console.log("매 시간의 1,2,3,4,5분마다 작업이 실행됩니다.");
});

cron.schedule("0 9 * * 1", () => {
  console.log("매주 월요일 09:00 에 실행됩니다.");
});

cron.schedule("0 9 * * Monday", () => {
  console.log("매주 월요일 09:00 에 실행됩니다.");
});

cron.schedule("0 21 * * *", () => {
  console.log("매일 밤 21:00 에 실행됩니다.");
});

const task = cron.schedule(
  "* * * * * *",
  () => {
    console.log("1초 마다 작업이 실행 됩니다.");
  },
  { scheduled: false } //start()함수가 호출이 되어야 실행이 됨
);

task.start(); //작업 시작
task.stop(); //작업 멈춤
task.destroy(); //작업을 완전히 삭제
