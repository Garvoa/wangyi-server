const mongoose = require('mongoose')
const Koa = require('koa')
const KoaRouter = require('koa-router');
const Jwt = require('jsonwebtoken')
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new KoaRouter();


app.use(bodyParser());
app.use(require('./middleware/token-verify'))
app.use(router.routes())
app.use(router.allowedMethods())

require('./routers/home')(router)
require('./routers/indexCateModule')(router)
require('./routers/categoryLeft')(router)
require('./routers/categoryRight')(router)
require('./routers/login')(router, Jwt)
require('./routers/register')(router)
require('./routers/worthBuying')(router)

app.listen('3001', (err) => {
  if (!err) {
    mongoose.connect("mongodb://localhost:27017/datas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('服务器地址: http://localhost:3001');
  }

})
mongoose.connection.once("open", (err) => {
  if (err) {
    console.log("连接数据库失败", err);
    return;
  }
  console.log("连接数据库成功~");
});