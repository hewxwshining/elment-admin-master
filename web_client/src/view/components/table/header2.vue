<template>
  <div class="card">
    <div class="card-header bg-transparent">
      <h4> render:能对用户输入的信息进行处理，向服务器重新请求数据</h4>
    </div>
    <div class="card-body">
      <el-table border :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
        <el-table-column label="Date" prop="date">
        </el-table-column>
        <el-table-column label="Name" prop="name">
        </el-table-column>
        <el-table-column align="center" :render-header="customFieldColumn">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="card-footer bg-transparent">
      <el-collapse accordion>
        <el-collapse-item title="code">
          <pre>
              <code>
                customFieldColumn(h, { column, $index }) {
                  return (
                    h('span', [
                      h('input', {
                        style: {
                          border: "1px solid #f1f1f1",
                          borderRadius: "3px",
                          padding: "2px 5px"
                        },
                        attrs: {
                          placeholder: "输入用户名搜索"
                        },
                        on: {
                          blur: this.searchByName
                        }
                      })
                    ])
                  )
                }
            </code>
          </pre>
        </el-collapse-item>
      </el-collapse>
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
    },
    customFieldColumn(h, { column, $index }) {
      return (
        h('span', [
          h('input', {
            style: {
              border: "1px solid #f1f1f1",
              borderRadius: "3px",
              padding: "2px 5px"
            },
            attrs: {
              placeholder: "输入用户名搜索"
            },
            on: {
              blur: this.searchByName
            }
          })
        ])
      )
    },
    searchByName(e) {
      let data = e.target.value;
      if (data == '') {
        this.$message({ showClose: true, message: "您什么都没有输入", type: 'success' });
      } else {
        this.$message({ showClose: true, message: "您输入了" + data, type: 'success' });
      }
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
