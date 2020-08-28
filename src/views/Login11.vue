<template>
  <div class="login-wrap">
    <div class="login-box">
      <img src="../static/img/logo.png" alt class="login-logo" />
      <div class="login-title">小贝壳后台管理系统</div>
    </div>
    <div class="login-container">
      <p class="login-container-tishi">安全登录，防止被盗</p>
      <img src="../static/img/1.jpg" alt="" class="login-container-wxCode">
      <p class="login-container-tishi">请使用微信二维码扫描登陆</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.login-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #193c6d;
  // background-image: linear-gradient(
  //   -135deg,
  //   #0c60d3,
  //   #5da2d7,
  //   #8bbaf4,
  //   #0c60d3
  // );
  background-image: url("../static/img/beike.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.login-title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
  color: #fff;
  padding-left: 20px;
}
.login-box {
  display: -webkit-flex;
  flex-flow: row nowrap;
  margin: 150px auto 30px;
  justify-content: center;
  align-items: center;
}
.login-logo {
  display: block;
  width: 40px;
}

.login-container{
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  position: relative;
  z-index: 10;
  .login-container-tishi{
    font-size: 12px;
    text-align: center
  }
}
.login-container-wxCode{
  display: block;
  width: 200px;
  height: 200px;
  margin:20px auto;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
</style>