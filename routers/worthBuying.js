let worthBuying = require('../models/zhidemai')

module.exports = function (router) {
  router.get('/api/worthBuying', async (ctx, next) => {


    const result = await worthBuying.find({})
    if (result) {
      ctx.body = { code: 200, data: result, msg: '成功' }
    } else {
      ctx.body = { code: 201, data: {}, msg: '失败' }
    }


  });
}



