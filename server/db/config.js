const mongo = require('mongoose')
mongo.connect('mongodb+srv://lazerxd002:fakedatabase@cluster0.1xzl4xe.mongodb.net/maytwel?retryWrites=true&w=majority&appName=Cluster0')
.then(console.log('connected'))
.catch(err=>console.log(err))


module.exports=mongo