<template>
  <div class="operations">
    <el-form :inline="true" :model="formRecord" class="demo-form-inline" label-width="100px">
      <el-form-item label="操作日期">
        <el-date-picker
          v-model="formRecord.valueTime"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="操作用户">
        <el-input v-model="formRecord.goods" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="bindSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableRecord"
      style="width: 100%"
      border
      stripe
      @selection-change="bindSelectionChange"
    >
      <el-table-column prop="username" label="操作人" align="center"></el-table-column>
      <el-table-column
        prop="path"
        label="路径"
        align="center"
        width="200"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column prop="moduleName" label="模块名称" align="center"></el-table-column>
      <el-table-column prop="moduleContent" label="模块内容" align="center"></el-table-column>
      <el-table-column prop="data" label="操作日期" align="center"></el-table-column>
      <el-table-column prop="result" label="操作结果" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formRecord: {
        valueTime: "",
        goods: "",
        orderNum: ""
      },
      tableRecord: [
        {
          username: "荣伟",
          path: "../../pages/Data",
          moduleName: "数据管理",
          moduleContent:"数据添加",
          data: "2019 9.01",
          result:" 增加了一条数据"
        }
      ]
    };
  },
  methods: {
    bindSubmit() {},
    bindSelectionChange() {}
  }
};
</script>

<style>
</style>