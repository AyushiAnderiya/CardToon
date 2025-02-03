const mongoose=require("mongoose");
mongoose.connect(`mongodb://localhost/textapp1`);
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    image:String
})
module.exports=mongoose.model('user',UserSchema);