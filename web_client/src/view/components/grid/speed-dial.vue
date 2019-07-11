<template>
  <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">1</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">2</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">3</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">4</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">5</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">6</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">7</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">8</div></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><div class="content">9</div></div>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.grid-content {
  text-align: center;
  padding-bottom: 100%;
  position: relative;
  border: 1px solid #f3f3f3;
  &:hover{
  	background: #f8f8f8;
  }
  .content{
  	position: absolute;
  }
}

</style>
