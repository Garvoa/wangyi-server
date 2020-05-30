let Users = require('../models/users')
const secret = "WkZ!IW*f5%wS1P3z";
module.exports = function (router, jwt) {

  router.post('/api/login', async (ctx, next) => {
    console.log(ctx.request.header)
    const { username, password } = ctx.request.body
    const result = await Users.findOne({ username, password })
    let Token = jwt.sign({ username }, secret, { expiresIn: "7d" })
    if (result) {
      console.log(Token)
      ctx.body = { code: 200, msg: '登录成功', data: { username, Token } }
    } else {
      ctx.body = { code: 201, msg: '登录失败,用户名或者密码错误', data: {} }
    }

  });
}