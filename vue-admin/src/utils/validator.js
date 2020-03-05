export var validateCode = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入验证码'));
  } else {
    callback();
  }
};
export var validateUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    callback();
  }
};
export var validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};
export var validatePasswordRepeat = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value != ruleForm.password) {
    callback(new Error('重复密码不正确'));
  } else {
    callback();
  }
};