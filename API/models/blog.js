const  mongoose = require('mongoose')
const Schema = mongoose.Schema

var blogSchema = new Schema({
	title: {
		type: String,
		required: [true,"ENTER A TITLE FOOL"]
	},
    description: {
        type: String,
        required: [true,"ENTER A DESCRIPTION FOOL"]
    },
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Blog', blogSchema);