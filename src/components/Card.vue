<template>


  <div>


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{currentNode}} </span>
<!--        <slot>no</slot>-->
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    currentNode: String,
  },
  // props:["currentNode"],
  mounted() {
    console.log("mounted + this.currentNode");
    console.log(this.currentNode);
  },
  data(){
    return{
      cu:"",

    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
