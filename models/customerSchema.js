const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
// we call this userSchema anything i want and the imortat thing to put this to here =>
 // const user = mongoose.model("customer", userSchema);
const userSchema = new Schema({
 // i put the key that one i puted in name 
 firstName : String, 
 lastName : String,
 email : String,
 phoneNumber : Number,
 age : Number,
 country : String,
 gender : String, 
}, {timestamps : true} );

// and then i make model
// Create a model based on that schema
// i can of course choose any name but the first letter it should be capital = User
//Mydataa دا الى هيتم فى تخزين البيانات
// customers في النت هتلقي مسمي 

const User = mongoose.model("Customer", userSchema);

// export the model
// عشان اصدر امو فى الملف الرئيسي
module.exports = User;