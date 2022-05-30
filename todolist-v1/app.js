const express=require("express")
const bodyParser=require("body-parser")
const { vary } = require("express/lib/response")
var items=["Buy Food","Cook Foods"," Eat Food"]


const app=express()
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
var today=new Date()
var options={
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}
var day =today.toLocaleDateString("en-US",options)
   
   res.render("list",{today:day,itemAdd:items})
})

app.listen(3000,function(){
    console.log("Server Started Listenning on port 3000")
})
app.post("/",(req,res)=>{
   var item= req.body.newItem
   items.push(item)
   res.redirect("/")
 
})

app.get("/about",(req,res)=>{
    res.render("about")
})