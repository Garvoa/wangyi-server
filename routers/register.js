let Users = require('../models/users')

module.exports = function (router) {
  router.post('/api/register', async (ctx, next) => {
    const { username, password } = ctx.request.body
    const result = await Users.findOne({ username }, { username: 1, _id: 0 })
    if (result) {
      let name = result.username === username ? '用户名' : ''
      ctx.body = { code: 201, msg: '注册失败,该用户名已注册', data: {} }
      return
    }
    await Users.create({
      username,
      password
    })
    ctx.body = { code: 200, msg: '注册成功', data: {} }



  });
}