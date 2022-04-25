let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//************************************************************************************************************/1

let getDistrictSession =  async function (req , res){

    try {
       let district = req.query.districtId
       let date = req.query.date = req.query.date
       let options = {
           method:"get",
           url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
       }
       let result = await axios(options);
       console.log(result.data)
       res.status(200).send({msg:result.data})
      
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }


}


//*****************************************************************************************************/2



let getCities = async function(req,res){
    try{
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow","Chandrapur"]
        let arrayOfCities = []
        for(let i = 0; i<city.length; i++){
            let obj={city : city[i]}
            let options = {
             method : 'get',
             url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=f65d66c174176e2edd33fa47192bd1ad`
             }
             let result = await axios(options)
            obj.temp = result.data.main.temp
            console.log(obj.temp)
            arrayOfCities.push(obj)
        }
        let sortedTemp = arrayOfCities.sort((a,b)=>{return a.temp - b.temp})
        res.status(200).send({status:true, msg : sortedTemp})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({msg: err.message})
    }
}



//*****************************************************************************************************/3


const getMemes = async (req, res) => {
    try{
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let user = req.query.username 
        let pass = req.query.password
        let fetch = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${user}&password=${pass}`
        }
        let result = await axios(fetch)
        res.status(200).send({msg: result.data})
    }catch(err){
        res.status(500).send({msg: err.message})
    }
}










module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp



module.exports.getDistrictSession = getDistrictSession
module.exports.getCities = getCities
module.exports.getMemes = getMemes