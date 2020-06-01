let indexCateModule = require('../models/indexCateModule')

module.exports = function (router) {
  router.get('/api/indexCateModule/navList', async (ctx, next) => {
    const result = await indexCateModule.find({}, { subCateList: 0 })
    ctx.body = { code: 200, data: result, msg: '成功' }

  });
  router.post('/api/indexCateModule/navitem', async (ctx, next) => {

    const { id } = ctx.request.body

    const result = await indexCateModule.findOne({ id })
    if (result) {
      ctx.response.body = { code: 200, data: result, msg: '成功' }
    } else {
      ctx.response.body = { code: 201, data: {}, msg: '失败' }
    }

  });

}



