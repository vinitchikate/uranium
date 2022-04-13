const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let bookInfo= await bookModel.find().select({bookName : 1 , authorName : 1 , _id : 0})
    res.send({msg: bookInfo})
}


module.exports.createBook= createBook
module.exports.bookList= bookList

