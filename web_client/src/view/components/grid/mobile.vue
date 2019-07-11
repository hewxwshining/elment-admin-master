<template>
  <div class="no-bg">
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="card">
          <div class="card-header bg-transparent">this is title</div>
          <div class="card-body">this is content</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="card">
          <div class="card-header bg-transparent">this is title</div>
          <div class="card-body">this is content</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="card">
          <div class="card-header bg-transparent">this is title</div>
          <div class="card-body">this is content</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card">
          <div class="card-header bg-transparent">this is title</div>
          <div class="card-body">this is content</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card">
          <div class="card-header bg-transparent">this is title</div>
          <div class="card-body">this is content</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.no-bg {
  background: none !important;
}

.el-row {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}
.card-body{
	min-height: 200px;
}
</style>
