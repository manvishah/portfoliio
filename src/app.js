let express= require("express");
var app=express();
let port=process.env.PORT || 8000;
let path=require("path");
let hbs = require("hbs");

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));

app.get("", (req,res)=> {
    res.render("index");
})
app.get("/index", (req,res)=> {
    res.render("index");
})
app.get("/about", (req,res)=> {
    res.render("about");
})

app.get("/services", (req,res)=> {
    res.render("services");
})

app.get("/blog", (req,res)=> {
    res.render("blog");
})

app.get("/contact", (req,res)=> {
    res.render("contact");
})

app.get("*", (req,res)=> {
    res.status(404).render("error");
})

app.listen(port, ()=> {
    console.log("hi")
})