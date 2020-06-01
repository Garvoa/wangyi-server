const mongoose = require('mongoose')
const zhidemaichema = new mongoose.Schema({});

// 创建集合Model
const Zhidemai = mongoose.model("zhidemai", zhidemaichema, 'zhidemai');

module.exports = Zhidemai