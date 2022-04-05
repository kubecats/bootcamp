console.log("hello world");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));

const arr = [
  { name: "John Doe", email: "john@gmail.com" },
  { name: "Jeremy Go", email: "jeremy@gmail.com" },
];

console.log(arr);
console.table(arr);

const obj = {
  student: {
    grade1: { class1: {}, calss2: {} },
    grade2: { class1: {}, calss2: {} },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

console.log(obj);
console.table(obj);
console.table(obj);

console.dir(obj, { depth: 1, color: true });

console.time("func 1");
for (let i = 0; i < 99999; i++) {}
console.timeEnd("func 1");
