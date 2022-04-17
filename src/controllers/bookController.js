const bookModel= require("../models/bookModel")
const publisherModel = require("../models/PublisherModel")
const authorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data=req.body


    
    if (data.author && data.publisher){
        let authIdCheck = await authorModel.exists({ _id: data.author })
        let publIdCheck = await publisherModel.exists({ _id: data.publisher })
        if (authIdCheck && publIdCheck) {
            if (!await bookModel.exists(data)) {
                let bookCreated = await bookModel.create(data)
                res.send({ msg: bookCreated })
            } else res.send({ msg: "Book already exists" })
        }
        else res.send("AuthorId and publisherId both or any one of these are Invalid")
    }
    else res.send ({msg: "Author and publisher id Must be present"}) 
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}
const updateBook = async (req,res) => {
let find_PId = await publisherModel.findOne({name: req.body.publisher}).select('_id')
let data = await bookModel.updateMany(
{publisher: find_PId},
{$set: {isHardCover: true}}
 )
    res.send({msg: data})
}

const updateB = async (req,res) => { 
    let a_filter = await authorModel.find({rating: {$gt: 3.5}})
    await bookModel.updateMany({author: a_filter}, {$inc: {price: 10}})
    let data = await bookModel.find({author:a_filter})
    res.send({msg: data})
}



module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateB= updateB
module.exports.updateBook= updateBook









