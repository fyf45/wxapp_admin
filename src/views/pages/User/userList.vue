<template>
  <div class="userType">
    <div class="userBtn">
      <el-button type="primary" @click="bindAddUser">新增角色</el-button>
    </div>
    <el-table :data="userTableData" style="width: 100%" border stripe>
      <el-table-column type="selection" width="50" align="center"></el-table-column>
      <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
      <el-table-column prop="username" label="角色名称" align="center" width="150"></el-table-column>
      <el-table-column
        prop="permission"
        label="拥有权限"
        align="center"
        max-width="300"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column
        prop="datetime"
        label="创建时间"
        align="center"
        max-width="300"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button @click="bindEditClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="bindDeleteClick" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加 -->
    <el-dialog title="添加新角色" :visible.sync="dialogUserVisible">
      <el-form
        :model="userFormData"
        ref="userFormData"
        :rules="permissionRules"
        label-width="100px"
      >
        <el-form-item label="角色" prop="username">
          <el-input v-model="userFormData.username" placeholder="请输入角色名称" class="user-int"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" prop="promisstype">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="userFormData.promissType.checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <el-checkbox-group
            v-model="userFormData.promissType.checkType"
            @change="handlePermissCheckedChange"
          >
            <el-checkbox v-for="(item,index) in permissionDatas" :key="index" :label="item"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitUserForm('userFormData')">提交</el-button>
          <el-button @click="resetUserForm('userFormData')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
const permissionData = ["待审核", "代发货", "推荐管理", "用户管理"];
export default {
  data() {
    return {
      permissionDatas: permissionData,
      isIndeterminate: false,
      dialogUserVisible: false,
      userFormData: {
        username: "",
        promissType: {
          checkAll: false,
          checkType: []
        }
      },
      userTableData: [
        {
          id: 1,
          username: "超级管理员",
          permission: "管理所有的管理员",
          datetime: "2019.8:20",
          description: ""
        },
        {
          id: 2,
          username: "管理员",
          permission: "所有列表的管理",
          datetime: "2019.8:20",
          description: ""
        },
        {
          id: 3,
          username: "纠错员",
          permission: "负责数据内容的修改",
          datetime: "2019.8:20",
          description: ""
        }
      ],
      permissionRules: {
        username: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ],
        promisstype: [
          {
            required: true,
            message: "请至少选择一个角色权限",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    bindAddUser() {
      this.dialogUserVisible = true;
    },
    deleteUser() {},
    bindEditClick(rows) {},
    bindDeleteClick() {},
    submitUserForm(userFormData) {
      this.$refs[userFormData].validate(valid => {
        if (valid) {
          console.log(this.$refs[userFormData]);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetUserForm(userFormData) {
      this.$refs[userFormData].resetFields();
    },
    handleCheckAllChange(val) {
      this.userFormData["promissType"]["checkType"] = val ? permissionData : [];
      this.isIndeterminate = false;
    },
    handlePermissCheckedChange(value) {
      let checkedCount = value.length;
      this.userFormData["promissType"]["checkAll"] =
        checkedCount === this.permissionDatas.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.permissionDatas.length;
    }
  }
};
</script>

<style scoped>
.userType {
  width: 100%;
}
.userForm {
  width: 100%;
  display: -webkit-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.user-int {
  max-width: 200px;
}
.userBtn {
  width: 100%;
  margin-bottom: 20px;
}
</style>