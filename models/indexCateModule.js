const mongoose = require('mongoose')
const indexCateModulechema = new mongoose.Schema({});

// 创建集合Model
const IndexCateModule = mongoose.model("indexCateModule", indexCateModulechema, 'indexCateModule');

module.exports = IndexCateModule