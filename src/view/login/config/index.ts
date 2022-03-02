export const rules = {
  name: [
    { required: true, message: '号码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号6到9位',
      trigger: ['change', 'blur']
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /[a-z0-9]{6,9}/,
      message: '密码6到9位',
      trigger: ['change', 'blur']
    }
  ]
}
