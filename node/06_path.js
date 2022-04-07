console.log(__filename);
console.log(__dirname);

const path = require("path");

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.log(path);

// index.html으ㅣ 확장자를 확인하려면 원래 다음과 같이 해하는데
const filename = "index.html";
console.log(filename.substring(filename.indexOf(".")));

// path.extname으로 손쉽게 확장자 확인
console.log(path.extname("index.html"));

console.log(path.parse("/home/user/dir/file.txt"));
