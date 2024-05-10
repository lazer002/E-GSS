const mongo  = require("mongoose");

const mongoschema = new mongo.Schema({

    Firstname:{
    type:String
},

Lastname:{
    type:String
},

Email:{
    type:String
},

Country:{
    type:String
},

State:{
    type:String
},


City:{
    type:String
},

Gender:{
    type:String
},

Dateofbirth:{
    type:String
},
Age:{
    type:String
}
})

const mon = mongo.model('User',mongoschema)

module.exports=mon