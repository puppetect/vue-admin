<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li v-for="item in menuTab" :key="item.txt" :class="{ 'current': item.current }" @click="toggleMenu(item)">
          {{ item.txt }}
        </li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item prop="passwordRepeat" class="item-form" v-if="mode == 'reg'">
          <label>重复密码</label>
          <el-input type="password" v-model="ruleForm.passwordRepeat" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter='10'> 
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
          
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from '@vue/composition-api';
// import { validateCode, validateUsername, validatePassword, validatePasswordRepeat } from '../../utils/validator.js';
export default {
  name: "login",
  setup(props, context){
    let validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    let validatePasswordRepeat = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value != ruleForm.password) {
        callback(new Error('重复密码不正确'));
      } else {
        callback();
      }
    };
    const ruleForm = reactive({
      username: '',
      password: '',
      passwordRepeat: '',
      code: ''
    });
    const rules = reactive({
      username: [
        { validator: validateUsername, trigger: 'blur' }
      ],
      password: [
        { validator: validatePassword, trigger: 'blur' }
      ],
      passwordRepeat: [
        { validator: validatePasswordRepeat, trigger: 'blur' }
      ],
      code: [
        { validator: validateCode, trigger: 'blur' }
      ]
    });
    const menuTab = reactive([
      { txt: "登陆", current: true, type:'login' },
      { txt: "注册", current: false, type: 'reg' }
    ]); 
    const mode = ref('login');
    const toggleMenu = (item => {
      menuTab.forEach(elem => elem.current = false);
      item.current = true;
      mode.value = item.type;
    });
    const submitForm = (formName => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    });
    return {
      ruleForm,
      rules,
      menuTab,
      mode,
      toggleMenu,
      submitForm
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  background-color: darkslategrey;
  height: 100vh;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
  .block{
    width: 100%;
    display: block;
  }
  .login-btn{
    margin-top: 19px;
  }
}
</style>
