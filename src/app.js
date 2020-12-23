let express= require("express");
var app=express();
let port=process.env.PORT || 8000;
let path=require("path");
let hbs = require("hbs");

const bodyparser=require("body-parser");
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portfolio', {useNewUrlParser: true});

var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    emailid: String,
    // address: String,
    anything: String,
  });

  var Contact = mongoose.model('Contact', contactSchema);


const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }))

app.get("", (req,res)=> {
    const params = { }
    res.render("index",params);
})
app.get("/index", (req,res)=> {
    const params = { }
    res.render("index",params);
})
app.get("/about", (req,res)=> {
    const params = { }
    res.render("about",params);
})

app.get("/services", (req,res)=> {
    const params = { }
    res.render("services",params);
})


app.get("/contact", (req,res)=> {
    const params = { }
    res.render("contact",params);
})
app.get("/modal",(req,res) =>{
    const params = { }
    res.render("modal",params);
})
app.get("*", (req,res)=> {
    res.status(404).render("error");
})

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("thankyou");
    }).catch(() => {
        res.status(400).send("error");
    })
})

app.listen(port, ()=> {
    console.log("hi");
});