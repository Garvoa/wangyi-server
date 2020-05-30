let cateNavDatas = require('../models/cateNavDatas')

module.exports = function (router) {
  router.get('/api/categoryLeft', async (ctx, next) => {
    const result = await cateNavDatas.find({})

    ctx.body = result

  });
}



