let Index = require('../models/index')

module.exports = function (router) {
  router.get('/api/home', async (ctx, next) => {
    const result = await Index.find({})
    ctx.body = { code: 200, msg: '成功', data: result }

  });
}
