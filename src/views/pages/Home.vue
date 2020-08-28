<template>
  <div class="wrong-wrap">
    <h2 class="wel-title">Welcome to this system</h2>
    <h2 class="wel-title">欢迎使用本系统</h2>
    <img src="../../static/img/bg01.png" alt="" class="wel-img">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.wel-title {
  font-size: 24px;
  color: #697685;
  font-weight: bold;
  letter-spacing: 3px;
  @media (max-width: 480px) {
    font-size: 20px;
    letter-spacing: 0;
  }
}

.wel-img{
  display: block;
  max-width: 400px;
}
.wrong-wrap {
  p {
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
}
</style>