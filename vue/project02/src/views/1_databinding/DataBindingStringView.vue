<template>
  <!-- html을 감싸는 최상의 root tag가 1개 존재해야함 -->
  <!-- 단방향 데이터바인딩임, 사용자가 임의로 값을 바꿀수는 없음 -->
  <div>
    <h1>Hello, {{ userName }}</h1>
    <h1>Welcom to, {{ userName2 }}</h1>
    <p>{{ userName }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'hyunseung lee',
      userName2: 'kakao enterprise'
    }
  }
}
</script>
<style scoped></style>
