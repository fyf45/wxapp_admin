<template>
  <div class="acupoint-detail">
    <!-- Form --> 
    <el-form :model="acupointFormData" class="acupointFormData" label-width="70px">
      <el-form-item label="穴位名称">
        <el-input
          v-model="acupointFormData.acupoint_name"
          placeholder="请输入内容"
          class="pro-formInt"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="穴位图">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="acupointFileList"
          multiple
          list-type="picture"
          :limit="1"
          :on-preview="handleAcupointPreview"
          :on-remove="handleAcupointRemove"
        >
          <el-button size="small" type="primary">选取图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="艾灸参数">
        <el-input type="textarea" v-model="acupointFormData.mox_parameters" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="主治病症">
        <el-input type="textarea" v-model="acupointFormData.acupoint_disease" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="取穴图">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="acupointFileList"
          multiple
          list-type="picture"
          :limit="1"
          :on-preview="handleAcupointPreview"
          :on-remove="handleAcupointRemove"
        >
          <el-button size="small" type="primary">选取图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
      acupointFormData: {
        acupoint_name: "",
        mox_parameters: "",
        acupoint_disease: ""
      },
      acupointFileList: []
    };
  },
  methods: {
    handleAcupointPreview() {},
    handleAcupointRemove() {}
  }
};
</script>

<style scoped>
.acupointFormData{
  max-width: 500px;
}
.pro-formInt{
  width: 150px;
}
</style>