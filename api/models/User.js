const mongoose=require('mongoose');
const {Schema,model}=mongoose;


const userschema=new Schema({
    username:{type: string,required:true,min:4,unique:true},
    password:{type: string ,required:true},
})

const usermodel=model('User',userschema);

module.exports=usermodel;