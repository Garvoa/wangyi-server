const mongoose = require('mongoose')
const indexchema = new mongoose.Schema({});

// 创建集合Model
const Index = mongoose.model("index", indexchema, 'index');

module.exports = Index