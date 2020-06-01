let cateLists = require('../models/cateLists')

module.exports = function (router) {
  router.get('/api/categoryRight/:id', async (ctx, next) => {
    let parmas = Number(ctx.request.url.replace('/api/categoryRight/', ''))
    console.log(parmas, '11')
    const result = await cateLists.findOne({ id: parmas })
    console.log(result, '222')
    if (result) {
      ctx.body = { code: 200, data: result, msg: '成功' }
    } else {
      ctx.body = { code: 201, data: {}, msg: '失败' }
    }


  });
}



