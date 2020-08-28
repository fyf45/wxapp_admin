<template>
  <div class="data-detail">
    <!-- Form -->
    <el-form :model="programFormData" class="programFormData" label-width="70px">
      <el-form-item label="方案名称">
        <el-input
          v-model="programFormData.disease_major"
          placeholder="请输入内容"
          class="pro-formInt"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="图片上传">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="proFileList"
          multiple
          list-type="picture"
          :limit="1"
          :on-preview="handleProgramPreview"
          :on-remove="handleProgramRemove"
        >
          <el-button size="small" type="primary">选取图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="programFormData.disease_synopsis" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="症状">
        <el-input type="textarea" v-model="programFormData.disease_cause" :rows="3"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proFileList: [],
      programFormData: {}
    };
  },
  methods: {
    handleProgramPreview() {},
    handleProgramRemove() {},
    onSubmit(){}
  }
};
</script>

<style scoped>
.programFormData{
  max-width: 500px;
}
.pro-formInt{
  width:150px;
}
</style>