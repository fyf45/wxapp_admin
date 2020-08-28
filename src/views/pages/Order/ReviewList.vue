<template>
  <div>
    <div class="order-list">
      <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item label="下单时间">
          <el-date-picker
            v-model="formData.valueTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="formData.goods" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="formData.orderNum" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="bindSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column prop="ordernumber" label="订单号" width="180" align="center"></el-table-column>
        <el-table-column prop="goods" label="商品名称" align="center"></el-table-column>
        <el-table-column label="商品展示" width="100" align="center">
          <template slot-scope="scope">
            <el-popover placement="right" title trigger="click">
              <img :src="scope.row.imgurl" />
              <img
                slot="reference"
                :src="scope.row.imgurl"
                style="max-height: 50px;max-width: 50px"
              />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="贝壳币" align="center"></el-table-column>
        <el-table-column prop="count" label="数量" align="center"></el-table-column>
        <el-table-column prop="date" label="下单时间" width="150" align="center"></el-table-column>
        <el-table-column prop="username" label="用户" align="center"></el-table-column>
        <el-table-column prop="state" label="交易状态" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleClick(scope.row,scope.row.type)"
              :data-type="scope.row.type"
            >查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        valueTime: "",
        goods: "",
        orderNum: ""
      },
      activeName1: 0,
      tableData: [
        {
          ordernumber: "0",
          date: "2016-05-03",
          username: "😊",
          goods: "fruit",
          price: "200",
          count: 2,
          state: "待审核",
          type: 1,
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg"
        },
        {
          ordernumber: "1",
          date: "2016-05-03",
          username: "张三",
          goods: "apple",
          price: "200",
          count: 2,
          state: "待审核",
          type: 0,
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg"
        },
        {
          ordernumber: "2",
          date: "2016-05-03",
          username: "李四",
          goods: "pear",
          price: "200",
          count: 2,
          state: "待审核",
          type: 1,
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg"
        },
        {
          ordernumber: "3",
          date: "2016-05-03",
          username: "王五",
          goods: "orange",
          price: "200",
          count: 2,
          state: "待审核",
          type: 2,
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg"
        },
        {
          ordernumber: "4",
          date: "2016-05-03",
          username: "赵六",
          goods: "banner",
          price: "200",
          count: 2,
          state: "已审核",
          type: 3,
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    bindSubmit() {
      console.log(this.orderData);
    },
    bindHandleClick(tab, event) {
      // console.log(tab);
    },
    handleClick(row, type) {
      this.$router.push({
        path: "/reviewdetail",
        name: "审核详情",
        params: { orderData: row }
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
.order-list {
  width: 100%;
}
</style>