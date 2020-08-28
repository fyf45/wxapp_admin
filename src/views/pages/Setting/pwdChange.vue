
<template>
  <div class="pwdChange">
    <div class="pwd-title">
      <h2>设置我的密码</h2>
    </div>
    <el-form :model="pwdForm" label-width="100px" class="pwd-fom" :rules="rules" ref="pwdForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="pwdForm.pass" auto-complete="off" class="pwdInt"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="pwdForm.checkPass" auto-complete="off" class="pwdInt"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
        <el-button @click="resetForm('pwdForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.pwdForm.checkPass !== "") {
          this.$refs.pwdForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.pwdForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      pwdForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(pwdForm) {
      this.$refs[pwdForm].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(pwdForm) {
      this.$refs[pwdForm].resetFields();
    }
  }
};
</script>

<style scoped>
.pwdChange {
  width: 100%;
}
.pwd-title {
  border-bottom: 1px solid #ebeef5;
}
.pwd-title h2 {
  font-size: 14px;
  color: #606266;
  padding-bottom: 10px;
}
.pwd-fom{
    margin-top: 20px;
}
.pwdInt{
    width: 193px;
}
</style>