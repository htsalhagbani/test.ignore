import express from "express";
import mongoose from 'mongoose';
import artical from "./modales/blog.js";
 import dotenv from 'dotenv'
 dotenv.config();

const app =express();
app.use(express.json());
const port=8083;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
 console.log("database connect");
}


app.get('/artical',(req,res)=>{

const newArtical= new artical({
    title:"haneen",
    body:"body haneen",
})

newArtical.save()
.then((result)=>{
res.send(result);
})

})

app.post('/addartical',(req,res)=>{
    const postartical=new artical({
    name:req.body.name,
    isEmployee:req.body.isEmployee,
     title: req.body.title,
     body: req.body.body,
     
    })
    postartical.save()
    .then((result)=>{
        res.send(result);
    })
})

app.get('/allobj',(req,res)=>{
artical.find()
.then((result)=>{
    res.send(result);
})

})

app.patch('/updateartical/:id',(req,res)=>{
    const {id}=req.params;
   artical.findByIdAndUpdate(id,req.body , {new:true , runValidators:true}) //short way
 .then((result)=>{
    res.send(result);
 }) .catch((err)=>{
res.send("error"+err);
 })


})

app.delete('/articaldel/:id',(req,res)=>{
    const {id}=req.params;

    artical.findByIdAndDelete(id)
    .then((result)=>{
        res.send('delete sucess !!');
    })
})

//67063aff2fb3e84492b609eb
app.get('/oneDelete/:id',(req,res)=>{
const {id}=req.params;
artical.findById(id)
.then((result)=>{
    res.send(result);
})
})


app.get('/user',(req,res)=>{
    res.send('Haneen');
})

// app.get('/age',(req,res)=>{
//     res.send('24');
// })

// app.post('/userinfo',(req,res)=>{
//     const name=req.body.name;
//     const passowrd=req.body.passowrd;

//     const userinfo={name,passowrd}
//     array.push(userinfo);
//     res.json(userinfo)
// })

// app.get('/userinfo',(req,res)=>{
//    res.json(array)
// })

// app.patch('/userinfo/:id',(req,res)=>{
// const userid=parseInt(req.params.id);
// const user=array[userid];
// const {name,passowrd}=req.body;
// user.name=name;
// user.passowrd=passowrd;
// res.json(user); 
// })

// app.delete('/userinfo/:id',(req,res)=>{
// const userid=parseInt(req.params.id);
// const user=array[userid];
// array.splice(userid, 1); 
// res.json(user);
// })

app.listen(port,()=>{

})
