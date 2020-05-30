const mongoose = require('mongoose')
const cateNavDataschema = new mongoose.Schema({});

// 创建集合Model
const cateNavDatas = mongoose.model("cateNavDatas", cateNavDataschema, 'cateNavDatas');

module.exports = cateNavDatas