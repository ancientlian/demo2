<template>
  <div>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">

          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>

          <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            node-key="id"
            default-expand-all
            show-checkbox
            :check-strictly="checkStrictly"
            highlight-current
            :filter-node-method="filterNode"
            @check-change="handleCheckChange"
            ref="tree">
          </el-tree>
          <div class="buttons">
            <el-button @click="getCheckedNodes">通过 node 获取</el-button>
            <el-button @click="getCheckedKeys">通过 key 获取</el-button>
            <el-button @click="setCheckedNodes">通过 node 设置</el-button>
            <el-button @click="setCheckedKeys">通过 key 设置</el-button>
            <el-button @click="resetChecked">清空</el-button>
            <el-button @click="addAllNode" style="background: rebeccapurple">添加树节点</el-button>

          </div>

        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">

          <card v-for="node in nodeData" :key="node" :current-node= "currentNode" >
<!--<template v-slot:default>-->
<!--  <span>{{ currentNode }}</span>-->
<!--</template>-->
          </card>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Tree",
  components: {Card},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },

  methods: {
    addAllNode() {
      // console.log(this.$refs.tree.getCheckedNodes());
      this.nodeData = this.$refs.tree.getCheckedNodes(true, false)

      console.log(this.nodeData)
    },


    // 如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置node-key。
    getCheckedNodes() {

      // this.checkStrictly = true
      // this.$nextTick(() => {
      //   this.$refs.tree.setCheckedNodes(true) //给树节点赋值
      //   this.checkStrictly = false //重点： 赋值完成后 设置为false
      // })
      console.log(this.$refs.tree.getCheckedNodes(true, false));


    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 9,
        label: '三级 1-1-1'
      }]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },

    // ------
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleCheckChange(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate);
      // console.log(data);

      // console.log(data.id)
      if (data.children == null) {
        this.nodeData.push(data.label);
        this.currentNode = data.label;
      }
      console.log( "this.currentNode");
      console.log( this.currentNode);

    },
    handleNodeClick(data) {
      console.log(data);
    },
  },

  data() {
    return {
      currentNode: "",
      nodeData: [],
      checkStrictly: false,
      filterText: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };

  }


}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
