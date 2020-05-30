let indexCateModule = require('../models/indexCateModule')

module.exports = function (router) {
  router.get('/api/indexCateModule/navList', async (ctx, next) => {
    const result = await indexCateModule.find({}, { subCateList: 0 })
    ctx.body = result

  });
  router.get('/api/indexCateModule/navitem', async (ctx, next) => {
    let parmas = Number(ctx.request.search.replace('?', ''))
    console.log(parmas)
    const result = await indexCateModule.findOne({ text: parmas })
    if (result) {
      ctx.response.body = { code: 200, data: result, msg: '成功' }
    } else {
      ctx.response.body = { code: 201, data: {}, msg: '失败' }
    }
    ctx.response.body = { code: 201, data: {}, msg: '失败' }
  });

}



