const mysql = require("mysql");
const sql = require("./sql");

// http://npmjs.com/package/mysql
// 여기에서 사용예제하는 방식으로 DB커넥션을 맺지는 않음
// 동시에 10개의 커넥션을 허용하는 pool 을 미리 만듦

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "dev",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
});

/* 쿼리문을 실행하고 결과를 반환하는 함수 */
const query = async (alias, values) => {
  return new Promise((resolve, reject) =>
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        // 에러가 발생
        console.log(error);
        reject({
          error,
        });
      } else resolve(results); // 쿼리 결과를 전달
    })
  );
};

// 다른 javascript에서도 사용할 수 있도록 처리
module.exports = {
  query,
};
