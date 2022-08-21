const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    namebook: String,
    reference : String,
    path: String, 
    image : String,
    description : String,
}, {timestamps: true})



module.exports = mongoose.model('books' ,booksSchema )