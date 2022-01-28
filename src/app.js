const express=require('express')
require('../src/db/student')
const app=express()
const port=process.env.port || 3000

const student=require('../src/models/conn')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.post('/students',async(req,res)=>{
    try{
        const std=new student(req.body)
        const userdata=await std.save()
        res.send(userdata)

    }catch(e){
        res.send(e)

    }

})

app.get('/students',async(req,res)=>{
    try {
        const studata=await student.find()
        res.send(studata)
        
    } catch (error) {
        res.send(error)
    }
})


app.get('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id 
        const std_id=await student.findById(_id);
        res.send(std_id)
    }
    catch(e){
        console.log(e);
    }
})


app.patch('/students/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        const update_std=await student.findByIdAndUpdate(_id,req.body)
        res.send(update_std)
        
    } catch (error) {
        console.log(error);
    }
})

app.delete('/students/:id',async(req,res)=>{
    try{
        const std_delete=await student.findByIdAndDelete(req.params.id);
        res.send(std_delete)
    }
    catch(e){
        console.log(e);
    }
})

app.listen(port,()=>{
    console.log(`listening to ${port}`);
})