const bookModel= require("../models/bookModel")
const publisherModel = require("../models/PublisherModel")
const authorModel = require("../models/authorModel")

const createBook = async function(req,res){
    let data = res.body
    
    let authorverify = await authorModel.findById({_id: data.author})
    let publisherverify = await publisherModel.findById({_id: data.publisher})

    if(authorverify){
        if (publisherverify){
            let saveData = await bookModel.create(data)
            res.send({msg: saveData})
        } else{
            res.send({msg: "Publisher is not present"})
        }
    }else{
        res.send({msg: "author is not present"})
    }
}
const getBooksWithDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author','publisher')
    res.send({data: specificBook})

}

module.exports = {getBooksWithDetails,createBook}





