<template>
  <div class="order-details">
    <div class="details-Content">
      <h1 class="Content-title">用户信息</h1>
      <div class="Content-container">
        <div class="Content-Info">
          <div class="details-userItem" v-for="(item, i) in userInfo" :key="i">
            <span class="userItem-name">{{item.Infoname}}</span>
            <span class="userItem-text">{{item.Infotext}}</span>
          </div>
        </div>
      </div>
    </div>

    <el-collapse v-if="orderState === 0">
      <el-collapse-item title="贝壳记录使用情况">
        <div class="convert-list">
          <div>通过贝壳兑换使用 -200</div>
          <div>通过系统赠送获得 +200</div>
        </div>
      </el-collapse-item>
    </el-collapse>

    <div class="details-Content">
      <h1 class="Content-title">订单信息</h1>
      <div class="Content-container">
        <el-table :data="orderData" style="width: 100%" border>
          <el-table-column prop="ordernumber" label="订单号" width="200" align="center"></el-table-column>
          <el-table-column prop="goods" label="商品名称" align="center"></el-table-column>
          <el-table-column prop="price" label="贝壳币" align="center"></el-table-column>
          <el-table-column prop="count" label="数量" align="center"></el-table-column>
          <el-table-column prop="date" label="下单时间" align="center"></el-table-column>
          <el-table-column prop="username" label="用户" align="center"></el-table-column>
          <el-table-column prop="state" label="交易状态" align="center"></el-table-column>
        </el-table>
      </div>
    </div>

    <el-collapse v-if="orderState === 2 || orderState === 3">
      <el-collapse-item title="物流信息">
        <div>已揽件</div>
        <div>快件已到达【西北大草原】</div>
        <div>快件已到达【塔克拉玛干沙漠的中心地带】</div>
      </el-collapse-item>
    </el-collapse>

    <div class="btnGroup">
      <el-button
        type="primary"
        @click="bindpass"
        v-if="orderState === 0 || orderState === 1"
      >{{bindType}}</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: [
        {
          Infoname: "昵称:",
          Infotext: "fyf"
        },
        {
          Infoname: "收货信息:",
          Infotext: "北京市 朝阳区 酒仙桥 将台"
        },
        {
          Infoname: "联系人:",
          Infotext: "吴达"
        },
        {
          Infoname: "联系电话:",
          Infotext: "18271852026"
        }
      ],
      orderData: [],
      bindType: ""
    };
  },
  created: function() {
    this.orderData.push(this.$route.params.orderData);
    console.log(this.$route.params.orderData);
    this.orderState = this.$route.params.orderData.type;
    if (this.orderState === 0) {
      this.bindType = "确认审核";
    } else if (this.orderState === 1) {
      this.bindType = "立即发货";
    }
  },
  methods: {
    bindpass() {}
  }
};
</script>
<style scoped>
.Content-title {
  font-size: 16px;
}
.order-details {
  width: 100%;
}
.Content-container {
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ebeef5;
}
.details-Content:not(:first-child) {
  margin-top: 10px;
}
.details-userItem {
  width: 100%;
  padding-bottom: 10px;
}
@media (min-width: 768px) {
  .Content-Info {
    width: 100%;
    display: -webkit-flex;
    flex-flow: row wrap;
  }
  .details-userItem {
    width: 50%;
  }
}
.userItem-name,
.userItem-text {
  font-size: 14px;
  padding-right: 10px;
  color: #353b48;
}
.btnGroup {
  margin-top: 20px;
}
.convert-list {
  display: -webkit-flex;
  flex-flow: row wrap;
}
.convert-list>div{
  padding-left: 30px;
}

</style>