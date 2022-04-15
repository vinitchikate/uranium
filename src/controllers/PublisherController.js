const publisherModel= require("../models/PublisherModel")

const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

module.exports.createpublisher= createpublisher