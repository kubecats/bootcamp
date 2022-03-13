<template>
  <div>
    <!-- <input type="text" name="" id="" v-model="userId" /> -->
    <!-- <input type="text" name="" id="" v-bind:value="userId" readonly /> -->
    <input type="text" name="" id="" :value="userId" readonly />
    <br />
    <!-- <img src="@/assets/logo.png" alt="" /> -->
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <!-- <button :disabled="txt1 === ''">조회</button> -->
    <button :disabled="txt1 === ''">조회</button>
    <br />

    <input
      type="checkbox"
      name=""
      id=""
      v-model="agreeEmail"
      @change="style1.display = 'block'"
    />
    <label for="">이메일 보내기 동의</label>
    <br />
    <!-- <input type="email" name="" id="" v-show="agreeEmail.length > 0" /> -->
    <input type="email" name="" id="" :style="style1" />

    <br />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'kubecats',
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      txt1: '',
      agreeEmail: [],
      style1: {
        diplay: 'none'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
