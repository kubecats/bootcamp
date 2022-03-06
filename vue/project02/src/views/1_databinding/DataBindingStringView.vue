<template>
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
      userName2: 'sktelecom'
    }
  }
}
</script>
<style scoped></style>
