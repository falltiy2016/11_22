const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const Comment = require('./models/comment');
mongoose.connect('mongodb://testingclass:testing@ds153667.mlab.com:53667/testingclass')

app.use(cors());

app.use( bodyParser.json() );  

app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/blogs', function (req, res) {
	Blog
	.find()
	.populate('comments')
	.exec(function(err,response){
		res.json(response);
	});
})

app.post('/blog', function (req, res) {
	let blog = new Blog();
	blog.title = req.body.title;
	blog.description = req.body.description;
	blog.save((err,response) => {
		if(err) {
			res.json({error:err});
			return false;
		}
		res.json({success:response});
	});
})

app.post('/comment', function (req, res) {
	let comment = new Comment();
	comment.comment = req.body.comment;
	comment.blog = req.body.blogid;
	comment.save((err,response) => {
		if(err) {
			res.json({error:err});
			return false;
		}

		Blog.findById(req.body.blogid,(err,blog)=>{
			blog.comments.push(comment);
			blog.save();
			res.json({success:response});
		})
	});
})


app.listen(3005, function () {
  console.log('Example app listening on port 3000!')
})
