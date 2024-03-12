const mongo  = require("mongoose");

const mongoschema = new mongo.Schema({

firstname:{
    type:String
},

email:{
    type:String
},

passcord:{
    type:String
}
})

const mon = mongo.model('first',mongoschema)

module.exports=mon