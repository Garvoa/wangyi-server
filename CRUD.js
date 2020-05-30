// 启动指令三种方式
// 第一种：运行所有指令
// 第二种：运行当前光标所在行的指令
// 第三种：运行选中的指令
use test
db.stus.insert({name: 'rose', age: 20})
db.stus.find()

/* 
	CRUD 增删改查
	
	C - create 增
		db.collection.insert(文档对象) 
			db 代表当前数据库（可以通过use xxx来到xxx数据库）
			collection 代表集合（如果没有会自动创建）
			insert 插入
		向当前数据库的指定集合插入一条/多条文档数据		
	R - read 查
		db.collection.find(查询条件, 投影)
		
		操作符：
			1. > >= < <= !== $gt $gte $lt $lte $ne
			2. 与 默认就能实现
			   或 $or $in
			3. 正则表达式
			4. $where 值是一个函数，函数返回值true代表找到了，返回值false代表没有找到
		投影:		
			过滤数据中不要的字段
	U - update 改
		db.collection.updateOne(查询条件, 要修改的内容)
		db.collection.updateMany(查询条件, 要修改的内容)
	D - delete 删
		db.collection.deleteOne(查询条件)
		db.collection.deleteMany(查询条件)

*/
db.stus.insertOne({name: 'peihua', age: 20, isDeleted: false})
db.stus.insertMany([{name: 'tom', age: 16}, {name: 'jerry', age: 18}])

db.stus.find()
db.stus.findOne()
// 找到所有年龄为20的数据
db.stus.find({age: 20})
// 找到年龄为20，姓名为peihua的数据
db.stus.find({age: 20, name: 'peihua'})
// 找到年龄大于等于18的所有数据
db.stus.find({age: {$gte: 18}})
// 找到年龄为18或名字叫peihua的所有数据
db.stus.find({$or: [{age: 18}, {name: 'peihua'}]})
// 找到年龄为18或20的所有数据
db.stus.find({$or: [{age: 18}, {age: 20}]})
db.stus.find({age: {$in: [18, 20]}})
// 模糊查询：找到所有姓名以j开头的数据
db.stus.find({name: /^j/})
// 找到年龄大于等于18小于等于20的所有数据
db.stus.find({age: {$gte: 18, $lte: 20}})
db.stus.find({$where: function () { return this.age >= 18 && this.age <= 20 }})

// 找所有数据，但是只要姓名，不要年龄
db.stus.find({}, {age: 0, _id: 0})
db.stus.find({}, {name: 1, _id: 0})

// 找到 peihua 数据，将年龄改成38岁
db.stus.updateOne({name: 'peihua'}, {$set: {age: 38}})
// 找到所有数据，将年龄增加1岁
db.stus.updateMany({}, {$inc: {age: 1}})

// 删除年龄小于18的数据
db.stus.deleteMany({age: {$lt: 18}})
// 软删除
db.stus.updateMany({name: {$ne: 'peihua'}}, {$set: {isDeleted: false}})
db.stus.updateMany({name: 'peihua'}, {$set: {isDeleted: true}})
db.stus.find({isDeleted: false}, {isDeleted: 0})
