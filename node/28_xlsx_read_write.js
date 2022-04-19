const xlsx = require("xlsx");

const workbook = xlsx.readFile("./xlsx/test.xlsx"); // 엑셀 파일 읽기

const firstSheetName = workbook.SheetNames[0]; // 첫번째 시트 이름을 가져옴
const firstSheet = workbook.Sheets[firstSheetName]; // 첫번째 시트를 가져옴
console.log(firstSheet["A2"].v); //value는 cell의 값을 의미

firstSheet["B2"].v = "john@gmail.com"; // 이메일 주소 변경
firstSheet["A3"] = { t: "s", v: "Jeremy" }; // 새로운 셀을 기록 (type: 문자열, value: 값)

xlsx.writeFile(workbook, "./xlsx/test2.xlsx"); // 변경된 내용을 새로운 엑셀 파일로 생성
