<template>
  <div class="login">
    <div class="login-con">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="login-header clearfix">
          欢迎登录
        </div>
        <el-form>
          <el-input placeholder="请输入用户名" v-model="userName">
            <template slot="prepend"><i class="icon-qq"></i></template>
          </el-input>
          <el-input placeholder="请输入密码" v-model="password" show-password>
            <template slot="prepend"><i class="icon-qq"></i></template>
          </el-input>
          <el-button type="primary" size="small" @click="submit()">登录</el-button>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userName: "super_admin",
      password: ""
    }
  },
  methods: {
    submit() {
      let data = {
        userName: this.userName,
        password: this.password
      }
      this.handleLogin({ userName: this.userName, password: this.password }).then((res) => {
        this.getUserInfo().then((res) => {
          let massage = this.$message({ message: "登录成功,正在跳转页面", type: "success" });
          let _this = this;
          setTimeout(() => {
            massage.close();
            _this.$router.push({
              name: "home"
            })
          }, 1000)
        })
      })
    },
    ...mapActions([
      "handleLogin",
      "getUserInfo"
    ])
  }
}

</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/login-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  &-con {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;

    .login-header {
      font-size: 16px;
      font-weight: bold;
    }

    .form-con {
      padding: 10px 0 0;
    }

    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }

  .el-input,
  .el-button {
    margin-bottom: 20px;
  }

  .el-button {
    width: 100%;
  }
}

</style>
