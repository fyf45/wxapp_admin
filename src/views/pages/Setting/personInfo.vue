<template>
  <div class="personInfo">
    <div class="person-title">
      <h2>设置我的资料</h2>
    </div>
    <el-form :model="personForm" label-width="100px" class="person-fom" :rules="rules" ref="personForm">
      <el-form-item label="我的角色" prop="region">
        <el-select v-model="personForm.region" placeholder="请选择" disabled>
          <el-option label="超级管理员" value="shanghai"></el-option>
          <el-option label="客服" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="personForm.username" class="person-int"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="personForm.nickname" class="person-int"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="personForm.email" class="person-int"></el-input>
      </el-form-item>
      <el-form-item prop="number" label="手机号">
        <el-input v-model.number="personForm.number" class="person-int"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="personForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('personForm')">提交</el-button>
        <el-button @click="resetForm('personForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personForm: {
        region: "",
        username: "",
        nickname: "",
        email: "",
        resource: ""
      },
      rules: {
        region: [{ required: true, message: "请选择角色", trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        resource: [
          { required: true, message: "请选择性别", trigger: "change" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        number: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            type: "number",
            message: "请输入正确的手机号",
            trigger: "blur,change"
          }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.personInfo {
  width: 100%;
}
.person-title {
  border-bottom: 1px solid #ebeef5;
}
.person-title h2 {
  font-size: 14px;
  color: #606266;
  padding-bottom: 10px;
}
.person-fom {
  margin-top: 20px;
}
.person-int {
  width: 193px;
}
</style>