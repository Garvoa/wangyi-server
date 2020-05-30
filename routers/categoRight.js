let cateLists = require('../models/cateLists')

module.exports = function (router) {
  router.get('/api/categoryRight', async (ctx, next) => {
    let parmas = Number(ctx.request.search.replace('?', ''))

    const result = await cateLists.findOne({ id: parmas })
    if (result) {
      ctx.body = { code: 200, data: result, msg: '成功' }
    } else {
      ctx.body = { code: 201, data: {}, msg: '失败' }
    }


  });
}



