<template>
  <div class="card">
    <div class="card-header bg-transparent">
        <h4>filter:只能对已有数据进行过滤，没法跟后台进行交互</h4>
    </div>
    <div class="card-body">
      <el-table border :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
        <el-table-column label="Date" prop="date">
        </el-table-column>
        <el-table-column label="Name" prop="name">
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小一',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小二',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小三',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小四',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}

</script>
<style lang="scss">
.el-table th div {
  line-height: inherit;
}

.el-table th>.cell {
  margin-bottom: 0px;
}

</style>
