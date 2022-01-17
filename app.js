const express=require('express')
//var bodyParser = require('body-parser')
const mongoose=require('mongoose')
const Currency=require('./models/currency');
const fetch=require('cross-fetch')
const session=require('express-session')
var methodOverride = require('method-override')




const path=require('path');
mongoose.connect('mongodb://localhost:27017/currency')
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once('open',()=>{
    console.log('Database Connected');
})
const app=express();

app.set('view engine','ejs');
app.set('views','views')
app.use(express.json())

const endpoint = 'https://api.wazirx.com/api/v2/tickers';
let crypto={}

 







//    app.post('/',async(req,res)=>{
//     console.log(req.body)
//    var {empcode,sdm,absent,year,month,name,present,salary}=req.body
 
     
     
//       if(month==2 && year%4==0){
//         absent=29-present
//       }
//       if(month==2 && year%4!=0){
//         absent=28-present
//       }
//       if(month==4 || month==6 || month==9 || month==11){
//         absent=30-present
//       }
//       if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//         absent=31-present
//       }
//       actual_salary=salary-sdm*absent
//       const employee=new Employee({empcode,sdm,absent,year,month,name,present,salary,actual_salary})
//       await employee.save();
//     // req.session.user_id=user._id;
//     //  res.send({empcode,sdm,absent,year,month,name,present,salary,actual_salary})
//     res.redirect(`/${employee._id}`)
//    })
  
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

   


app.get('/',async(req,res)=>{
//     await fetch(endpoint)
//     .then(blob =>blob.json())
//    .then(data =>crypto={...data}
   
//      );
//     names=[];
//     i=0;j=0;
//     for (const x in crypto) {
//        //console.log(currency[x]);
//        if(j==10){
//            break;
//        }
//      names[i]=crypto[x]
//        i++;
//        j++;
//      }
//      console.log(names[0])
    //  for(let i=0;i<10;i++){
    //    var {base_unit,last,low,sell,buy,name,volume}=names[i] 
    //    const currency=new Currency({base_unit,last,low,sell,buy,name,volume})
    // await currency.save();
    //  }
     const currency=await Currency.find({})
       res.render('index',{currency})
       // const currency=await Currency.find({})
       //    res.render('index',{currency})
      })


app.listen(3000,()=>{
    console.log('Serving on port 3000')
})