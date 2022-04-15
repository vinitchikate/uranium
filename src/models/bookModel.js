const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
name:String,
price:Number,
ratings:Number,
 publisher:{type:ObjectId, ref: 'Publisher1'},
 author:{type:ObjectId,ref:'Author1'},


},

{ timestamps: true });


module.exports = mongoose.model('Book1', bookSchema)
