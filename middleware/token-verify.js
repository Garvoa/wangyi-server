const Jwt = require('jsonwebtoken')
const UN_CHECK_PATHS = ['/api/home', '/api/apilogin', '/api/categoryRight', '/api/categoryLeft', '/api/register', '/api/indexCateModule/navitem', '/api/indexCateModule/navList'];
const PRIVATE_KEY = 'WkZ!IW*f5%wS1P3z';
module.exports = function (ctx, next) {
  const url = ctx.url;
  console.log(UN_CHECK_PATHS, url)
  // 如果是登录请求，不进行验证~
  // 此处可以配置白名单
  if (UN_CHECK_PATHS.indexOf(url) !== -1) {
    return next();
  }

  // 其他所有请求都要验证token
  let token = ctx.headers['authorization'];  // atguigu_token值

  // 没有token
  if (!token) {
    // console.log(ctx.body)
    return ctx.body = { status: 201, msg: '你没有登录，需要登录才能使用' }
  }

  // 一开始值： atguigu_token  --> 截取后面token
  token = token.slice(8);

  // 有token进行校验
  jwt.verify(token, PRIVATE_KEY, (err, data) => {
    if (err) {
      // 验证失败~
      console.log('token验证失败', err.message);

      return ctx.body = {
        status: 2,
        msg: 'token过期失效'
      }
    } else {
      // 验证通过，添加到req上
      ctx.req.user = data; // {id: 12}

      return next();
    }
  })

};