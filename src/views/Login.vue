<template>
  <div class="login-wrap" id="indexLizi">
    <div class="login-par">
      <div class="login-box">
        <img src="../static/img/logo.png" alt class="login-logo" />
        <div class="login-title">小贝壳后台管理系统</div>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        class="login-container"
        v-if="loginFlag"
      >
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户登陆" name="first">
            <el-form-item prop="account" class="icon-login icon-user">
              <el-input
                type="text"
                v-model="ruleForm.account"
                size="large"
                :maxlength="20"
                auto-complete="off"
                placeholder="请输入您的手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class="icon-login icon-pass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                size="large"
                :maxlength="32"
                auto-complete="off"
                placeholder="登录密码"
              ></el-input>
            </el-form-item>
            <!--<el-form-item prop="checkCode" class="icon-login icon-code">
          <el-input type="text" v-model="ruleForm.checkCode" @keyup.native.enter="handleSubmit" size="large" :maxlength="4" auto-complete="off" placeholder="验证码" ></el-input>
          <div class="login-code-img" @click="getCheckCode"><img :src="checkImg.ImgBase64" alt="验证码"></div>
            </el-form-item>-->
            <!-- <el-form-item class="emitPass">
              <el-checkbox label="记住密码" name="type"></el-checkbox>
              <router-link to class="forgetPass">忘记密码</router-link>
            </el-form-item> -->
            <el-form-item style="width:100%;" class="login-btn">
              <el-button
                type="primary"
                size="large"
                style="width:100%;"
                @click.native.prevent="handleSubmit"
                :loading="logining"
              >登陆</el-button>
            </el-form-item>
            <div class="threeLogin">
              <!-- <router-link to>
                <img src="../static/img/QQ.png" class="threeLogin-img" />
              </router-link>-->
              <router-link to>
                <img src="../static/img/weixin.png" class="threeLogin-img" />
              </router-link>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="快速注册" name="second">
            <el-form-item prop="account" class="icon-login icon-user">
              <el-input
                type="text"
                v-model="regisForm.account"
                size="large"
                :maxlength="20"
                auto-complete="off"
                placeholder="请输入您的手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class="icon-login icon-pass">
              <el-input
                type="password"
                v-model="regisForm.checkPass"
                size="large"
                :maxlength="32"
                auto-complete="off"
                placeholder="登录密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkCode" class="icon-login icon-code checkCode">
              <el-input type="text" v-model="ruleForm.checkCode" placeholder="短信验证码"></el-input>
              <el-button @click="getCheckCode" class="getCheckCode">获取短信验证码</el-button>
            </el-form-item>
            <el-form-item style="width:100%;" class="login-btn">
              <el-button
                type="primary"
                size="large"
                style="width:100%;"
                @click.native.prevent="handleSubmit"
                :loading="logining"
              >注册</el-button>
            </el-form-item>
          </el-tab-pane> -->
        </el-tabs>
      </el-form>
      <!-- <el-form :model="ResetForm" ref="ResetForm" class="login-container">
      <el-form-item  prop="pass">
        <el-input type="password" v-model="ResetForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ResetForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ResetForm')" style="width:100%">提交</el-button>
       <el-button @click="resetForm('ResetForm')">取消</el-button> 
      </el-form-item>
      </el-form>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //用户名
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的登录账户名"));
      } else if (!/[A-Za-z0-9~!@#$%^&*()_+]{4,30}$/.test(value)) {
        callback(new Error("登录账户名格式不符"));
      } else {
        callback();
      }
    };
    //密码验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!/^[A-Za-z0-9~!@#$%^&*()_+]{6,15}$/.test(value)) {
          callback(new Error("请输入6~15位字母、数字或字符组成的密码"));
        }
        if (this.addForm.Checkpass !== "") {
          this.$refs.addForm.validateField("Checkpass");
        }
        callback();
      }
    };
    //验证码
    var validateCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (!/^[A-Za-z0-9]{4}$/.test(value)) {
          callback(new Error("请正确输入4位验证码"));
        }
        callback();
      }
    };
    return {
      loginFlag: true,
      activeName: "first",
      logining: false,
      ruleForm: {
        account: "admin",
        checkPass: "123456",
        checkCode: "",
      },
      regisForm: {
        account: "",
        checkPass: "",
        checkCode: "",
      },
      ResetForm: {
        phone: "",
        newCheckCode: "",
        newPass: "",
        newPassAgain: "",
      },
      checkImg: {},
      rules: {
        account: [
          { required: true, validator: validateUserName, trigger: "blur" },
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "请输入6到15个密码", trigger: "blur" },
        ],
        // checkCode: [
        //   { required: true, validator: validateCheck, trigger: 'blur' },
        // ]
      },
    };
  },
  methods: {
    handleReset() {
      this.$refs.ruleForm.resetFields();
    },
    handleSubmit() {
      var _this = this;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          _this.logining = true;
          _this.logintext = "正在登录...";
          setTimeout(function () {
            _this.logining = false;
            _this.logintext = "登录";
            _this.$message({
              message: "登录成功",
              type: "success",
            });
            sessionStorage.setItem(
              "BIGDATA_PLATFORM",
              JSON.stringify(_this.ruleForm)
            );
            _this.$router.push({ path: "/" });
          }, 1000);
        } else {
          return false;
        }
      });
    },
    getCheckCode() {},
  },
};
</script>

<style lang="scss">
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

.login-container {
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  position: relative;
  z-index: 10;
  .title {
    text-align: center;
    color: #666;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .icon-login {
    .el-input {
      .el-input__inner {
        padding-left: 40px;
      }
      &:before {
        font: normal normal normal 22px/30px FontAwesome;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
        left: 5px;
        text-align: center;
        color: #d7dce3;
      }
    }
    &.icon-user {
      .el-input {
        &:before {
          content: "\f2be";
        }
      }
    }
    &.icon-pass {
      .el-input {
        &:before {
          content: "\f023";
        }
      }
    }
    &.icon-code {
      .el-input {
        &:before {
          content: "\f132";
        }
      }
    }
  }
  .login-code-img {
    width: 86px;
    position: absolute;
    top: 5px;
    right: 5px;
    overflow: hidden;
    line-height: 0;
    cursor: pointer;
    img {
      width: 86px;
      height: 33.28px;
    }
  }
  @media (max-width: 480px) {
    padding: 10px;
    width: auto;
    background: none;
    box-shadow: none;
    .title {
      display: none;
    }
    .icon-login {
      .el-input {
        &:before {
          color: #e9eff5;
        }
        .el-input__inner {
          background: none;
          color: #eff5fb;
          border: none;
          border-bottom: 1px solid #e9eff5;
          border-radius: 0;
          padding-left: 50px;
          &::-moz-placeholder {
            color: #ddd;
          }
          &::-webkit-input-placeholder {
            color: #ddd;
          }
          &:-ms-input-placeholder {
            color: #ddd;
          }
        }
      }
    }
    .login-btn {
      padding-top: 20px;
      .el-button--large {
        padding: 15px;
        border-radius: 24px;
        background: #fff;
        border-color: #fff;
        color: #1d90e6;
      }
    }
  }
}
.emitPass .el-form-item__content::before,
.emitPass .el-form-item__content::after {
  display: none;
}
.emitPass .el-form-item__content {
  width: 100%;
  line-height: 1;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.forgetPass {
  color: #409eff;
}
.el-tabs__nav-wrap::after {
  height: 1px;
}
.login-box {
  display: -webkit-flex;
  flex-flow: row nowrap;
  margin: 0px auto 30px;
  justify-content: center;
  align-items: center;
}
.login-logo {
  display: block;
  width: 40px;
}
.threeLogin {
  display: -webkit-flex;
  flex-flow: row nowrap;
}

.threeLogin-img {
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
  font-weight: bold;
}
.checkCode .el-form-item__content {
  display: -webkit-flex;
  flex-flow: row nowrap;
  .getCheckCode {
    margin-left: 10px;
  }
}
.login-par {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>