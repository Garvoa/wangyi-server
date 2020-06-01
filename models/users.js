const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,

  },
  name: {
    type: String,
  }
});

// 创建集合Model
const Users = mongoose.model("users", userschema, 'users');

module.exports = Users