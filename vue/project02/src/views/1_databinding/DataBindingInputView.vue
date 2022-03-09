<template>
  <div>
    <!-- 양방향 binding의 의미: 사용자가 입력하거나 javascript 코드상에서 입력시 변경됨 -->
    <!-- 개발자가 값을 바꿔도, 키가 있는 v-model을 찾아서 value값을 바꿔줌 -->
    <!-- 사용자가 값을 바꾸어도 그 값이 반영됨 -->
    <input type="text" name="" id="id" v-model.trim="userId" />
    <!-- event발생시 javascipt의 onclick명령어 대신 @명령어로 사용함 -->
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br />
    <br />
    <input type="number" name="" id="" v-model="num1" />+
    <input type="number" name="" id="" v-model="num2" />=
    <span> {{ num1 + num2 }} </span>
    <!-- <button @click="calculate">계산</button> -->
    <br />
    <br />
    <!-- input type이 text임에도 불구하고 v-model.number로 지정하면 숫자로 인식할 수 있다. -->
    <input type="text" name="" id="" v-model.number="num3" />+
    <input type="text" name="" id="" v-model.number="num4" />=
    <span> {{ num3 + num4 }} </span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'kubecat',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      sum: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'hyunseung lee'
    },
    calculate() {
      this.sum = this.num1 + this.num2
    }
  }
}
</script>
