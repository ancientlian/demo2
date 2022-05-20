<template>

  <div>
    <div class="buttons">

      <el-button @click="show1" style="background: rebeccapurple">显示1</el-button>
      <el-button @click="show2" style="background: red">显示2</el-button>

    </div>

    <el-table
      :data="tableData"
      v-show="showFlag === 1"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      v-show="showFlag ===2"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="riqi"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
export default {
  name: "FormTable",
  data() {
    return {
      showFlag:0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    show1(){
     this.showFlag = 1;

    },
    show2(){
      this.showFlag = 2;
    }
  }
}
</script>

<style scoped>

</style>
