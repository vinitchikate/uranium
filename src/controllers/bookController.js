const bookModel= require("../models/bookModel")
const publisherModel = require("../models/PublisherModel")
const authorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data=req.body


    
    if (data.author && data.publisher) {
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



module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails









