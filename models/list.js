const mongoose=require("mongoose");

const listSchema=new mongoose.Schema({
   item:{
    type:String
   },
   date:{
    type:String,
   }
});

const List=mongoose.model("List",listSchema);
module.exports=List;