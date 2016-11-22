const  mongoose = require('mongoose')
const Schema = mongoose.Schema

var commentSchema = new Schema({
    comment: {
        type: String,
        required: [true,"ENTER A COMMENT FOOL"]
    },
	blog: { type: Schema.Types.ObjectId, ref: 'Blog' },
});

module.exports = mongoose.model('Comment', commentSchema);