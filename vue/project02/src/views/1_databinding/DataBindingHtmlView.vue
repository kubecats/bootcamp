<template>
  <div>
    <div>{{ htmlString }}</div>
    <!-- html tag를 사용하려면 v-html을 선언해줘야함 -->
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
