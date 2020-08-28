<template>
  <div class="goodsDetail">
    <el-form :model="goodsDetailData" label-width="80px">
      <el-form-item label="*基本信息"></el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="goodsDetailData.name" placeholder="请输入商品名称" class="goods-formInt"></el-input>
      </el-form-item>
      <el-form-item label="商品规格">
        <el-input v-model="goodsDetailData.name" class="goods-smallInt" placeholder="请输入规格"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="goodsDetailData.name" class="goods-smallInt" placeholder="请输入价格"></el-input>
      </el-form-item>
      <el-form-item label="库存">
        <el-input v-model="goodsDetailData.name" class="goods-smallInt" placeholder="请输入库存"></el-input>
      </el-form-item>
      <el-form-item label="是否上架">
        <el-radio-group v-model="goodsDetailData.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="*详情信息"></el-form-item>
      <el-form-item label="详情图">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="goodsDetailData.imgUrL" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品详情">
        <textarea name id cols="30" rows="10"></textarea>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      goodsDetailData: {
        name: "",
        imgUrL: "",
        style: "",
        price: "",
        store: "",
        resource: "是"
      }
    };
  }
};
</script>

<style scoped>
.goods-formInt {
  width: 200px;
}
.el-form-item {
  margin-bottom: 5px;
}
.goods-smallInt {
  width: 200px;
}
</style>