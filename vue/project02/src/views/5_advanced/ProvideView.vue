<template>
  <div><provide-inject />A</div>
</template>
<script>
import ProvideInject from '@/components/fragments/ProvideInject.vue'
export default {
  components: { 'provide-inject': ProvideInject },
  data() {
    return {
      sampleData: 'AAA'
    }
  },
  provide() {
    return {
      size: 5,
      str: this.sampleData
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
