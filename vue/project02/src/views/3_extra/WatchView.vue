<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <div>
      <p>{{ title }} {{ firstName }} {{ lastName }}</p>
    </div>
    <select name="" id="" v-model="selected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: '',
      firstName: 'Kubecat',
      lastName: 'Lee',
      middleName: '',
      title: 'Ms',
      changeHistory: []
    }
  },
  watch: {
    firstName(newValue, oldValue) {
      console.log(`${oldValue} -> ${newValue}`)
    },
    selected(newValue, oldValue) {
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
