<template>
  <div class="acupoint">
    <el-form ref="acupointDataForm" :model="acupointDataForm" :inline="true">
      <el-form-item label="穴位查询">
        <el-input v-model="acupointDataForm.acupoint" placeholder="请输入穴位名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="bindFormData">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="acupointTable" border @selection-change="bindacupointChange">
      <el-table-column prop="Acupoint_id" label="ID" align="center" width="50"></el-table-column>
      <el-table-column
        prop="acupoint_name"
        label="穴位名"
        align="center"
        width="100"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column label="穴位图" align="center" width="150">
        <template slot-scope="scope">
          <el-popover placement="right" title trigger="click">
            <img :src="scope.row.acupointDetails_img" />
            <img
              slot="reference"
              :src="scope.row.acupointDetails_img"
              style="max-height: 50px;max-width: 50px"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="mox_parameters"
        label="艾灸参数"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column
        prop="acupoint_disease"
        label="主治病症"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column label="取穴图" align="center" width="150">
        <template slot-scope="scope">
          <el-popover placement="right" title trigger="click">
            <img :src="scope.row.get_acupoint_img" />
            <img
              slot="reference"
              :src="scope.row.get_acupoint_img"
              style="max-height: 50px;max-width: 50px"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="取穴视频" align="center" width="150">
        <template slot-scope="scope">
          <!-- <video :src="scope.row.get_acupoint_video"></video> -->
          <video :src="scope.row.get_acupoint_video" style="max-height: 50px;max-width: 50px"></video>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="bindEditAcupoint(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acupointDataForm: {},
      acupointTable: [
        {
          Acupoint_id: "1",
          acupoint_name: "太阳穴",
          acupointDetails_img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg",
          mox_parameters: "隔物灸仪艾灸时间：30-50分钟；温度：38-50℃",
          acupoint_disease:
            "①胃痛、呕吐、纳少、腹胀等胃疾；②肋间神经痛，肩臂部诸肌痉挛或萎缩。",
          get_acupoint_img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg",
          get_acupoint_video:
            "https://cowrycare.com/oss/acupoints/%E9%98%B3%E9%99%B5%E6%B3%89/%E9%98%B3%E9%99%B5%E6%B3%89.mp4"
        }
      ]
    };
  },
  methods: {
    bindacupointChange() {},
    bindFormData() {},
    //查看详情
    bindEditAcupoint() {
      this.$router.push({
        path: "/acupointData/acupointDataDetail",
        name: "穴位详情"
      });
    }
  }
};
</script>

<style>
</style>