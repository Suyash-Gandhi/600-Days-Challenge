import express from "express"

const app=express()

app.get("/users/:id",(req,res)=>{
    res.json({
        sucess:true,
        id:req.params.id
    })
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})