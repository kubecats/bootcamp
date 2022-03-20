<template>
  <div v-if="userRole === 'G'">
    <button>조회</button>
  </div>
  <div v-else-if="userRole === 'M'">
    <button>조회</button>
    <button>생성</button>
  </div>
  <div v-else>
    <button>조회</button>
    <button>생성</button>
    <button>삭제</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userRole: 'G' // A: 관리자, M: 매니저, G:일반사용자
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
