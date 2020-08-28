<template>
  <div class="goods">
    <el-tabs v-model="tabGoods" type="card" @tab-click="handleClick">
      <el-tab-pane label="出售中的商品" name="first">
        <el-form :inline="true" :model="formGoods" class="demo-form-inline formGoods">
          <div>
            <el-form-item label="操作用户">
              <el-input v-model="formGoods.goods" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="bindSubmit">查询</el-button>
            </el-form-item>
          </div>
          <div>
            <el-form-item>
              <el-button
                type="primary"
                icon="el-icon-circle-plus-outline"
                @click="addGoods()"
              >商品发布</el-button>
            </el-form-item>
          </div>
        </el-form>

        <el-table
          :data="tableData"
          style="width: 100%"
          border
          @selection-change="bindSelectionChange"
        >
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
            align="center"
            width="120"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column label="商品图" align="center">
            <template slot-scope="scope">
              <el-popover placement="right" title trigger="click">
                <img :src="scope.row.photo" />
                <img
                  slot="reference"
                  :src="scope.row.photo"
                  style="max-height: 50px;max-width: 50px"
                />
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="style" label="商品规格" align="center"></el-table-column>
          <el-table-column prop="price" label="价格" align="center"></el-table-column>
          <el-table-column prop="store" label="库存" align="center"></el-table-column>
          <el-table-column prop="dateStart" label="发布时间" align="center"></el-table-column>
          <el-table-column prop="dateEnd" label="修改时间" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
              <el-button type="text" size="small" @click="editClick(scope.row)">上架</el-button>
              <el-button type="text" size="small" @click="deleteRow(tableChecked)">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="仓库中的商品" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flagDisplay: false,
      dialogFormVisible: false,
      tabGoods: "first",
      formGoods: {
        //搜索表单字段
        goods: ""
      },
      tableChecked: [], //选中后存放表格数据
      ids: [], //选中后id存放
      fileList: [], //上传图片的存放地址
      tableData: [
        {
          id: "0",
          name: "牙刷",
          photo:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg",
          style: "red",
          price: "30",
          store: "30",
          dateStart: "2016-05-03",
          dateEnd: "2016-05-04"
        },
        {
          id: "1",
          name: "牙膏",
          photo:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg",
          style: "绿色",
          price: "30",
          store: "30",
          dateStart: "2016-05-03",
          dateEnd: "2016-05-04"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    addGoods() {
      this.$router.push({
        path: "/goods/goodsdetail",
        name: "添加商品"
      });
    },
    //获取表格选中数据
    bindSelectionChange(val) {
      //console.log(val)
      this.tableChecked = val;
    },
    // 删除public
    deleteConfig(rows, callback) {
      if (rows.length > 0) {
        var _this = this;
        _this
          .$confirm("是否确认此操作?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            rows.forEach(element => {
              console.log(_this.ids);
              _this.ids.push(element.id);
              // 异步请求操作
              // callback();
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      } else {
        this.$alert("确认是否选中", "提示");
      }
    },
    //单个删除
    deleteRow(rows) {
      this.deleteConfig(rows);
    },
    //批量删除
    deleteAll(rows) {
      this.deleteConfig(rows);
    },
    //移除上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // },
    //表格编辑
    editClick(row) {
      this.dialogFormVisible = true;
      this.formData.title = row.title;
      this.fileList = [{ url: row.photo, name: "aaa.png" }];
    }
  },
  flagDisplay(row) {
    return (row.status = !row.status);
  },
  watch: {}
};
</script>

<style scoped>
.formGoods {
  display: -webkit-flex;
  justify-content: space-between;
}
.messageBox-int {
  max-width: 300px;
}
.scopeorder {
  display: -webkit-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>