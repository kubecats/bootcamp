// select * from dev.product_category
// dev를 넣을 필요가 없음, 이미 index.js에 정의되어 있음
// post로 전달한 데이터가 ? 에 들어가게 된다
module.exports = {
  categoryList: `select * from product_category`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category set ? where product_category_id=?`,
  categoryDelete: `delete from product_category where product_category_id=?`,
};
