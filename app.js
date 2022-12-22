const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require( "mongoose");
// const  path = require("path");
// const { fileURLToPath } = require("url");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/blogDB'); 
    //mongodb+srv://admin-femi:oluwafemi@cluster0.ulvxftn.mongodb.net/blogDB
}
mongoose.set('strictQuery', false);
 run();

 const blogSchema = {
    title: String,
    post: String
 }

 const Blog = mongoose.model('post', blogSchema);


app.get('/', (req, res) => {
    
        Blog.find((err, result) => {
            res.render('blog', {blogData: result})
        })
});

app.get('/about', (req, res) => {
    
   res.render('about')
});

app.get('/contact', (req, res) => {
    
    res.render('contact')
 });

app.get('/compose', (req, res) => {
    res.render('compose')
})

app.post('/compose', (req, res) => {
    
    const post = new Blog({
        title: req.body.title,
        post: req.body.post
    })

    post.save();
    res.redirect('/')
});

app.post('/read', (req, res) => {
    const blogPost = req.body.readBtn;
    
    Blog.findOne({_id: blogPost}, (err, result) => {
        if(!err){
            res.render('solePost', {soleBlog: result})
        }
    })
});

app.post('/home', (req, res) => {
    res.redirect('/');
});

app.post('/empty', (req, res) => {
    res.redirect('/compose');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server has Started Sucessfully')
});