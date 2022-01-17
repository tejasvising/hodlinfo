const mongoose=require('mongoose')
n=new Date();
const currencySchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        
    },
    last:{
        type:Number,
        required: true
       
    },
    buy:{
        type:Number,
        required: true
        
    },
    sell:{
        type:Number,
        required: true
    },
    volume:{
        type:Number,
        required: true
        
    },
    base_unit:{
        type:String,
        required: true,
   
    }


})

// employeeSchema.statics.findAndValidate=async function(username,password){
//     const foundUser=await this.findOne({username});
    
//    const isValid= await bcrypt.compare(password,foundUser.password)
//     return isValid? foundUser:false;
// }
// employeeSchema.pre('save',async function(next){
//    if(!this.isModified('password')) return next();
//     this.password=await bcrypt.hash(this.password,12);
//     next();
// })
module.exports=mongoose.model('Currency',currencySchema);