const mongoose = require('mongoose')
const cateListschema = new mongoose.Schema({});

// 创建集合Model
const cateLists = mongoose.model("cateLists", cateListschema, 'cateLists');

module.exports = cateLists