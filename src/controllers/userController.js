const { status } = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) { 
 let data = req.body;
  if(!await userModel.exists(data)){
  let savedData = await userModel.create(data);
  return res.send({msg:savedData});}
  else{
    return res.send({status:false,msg:"The user data is already exists"})
  }
  
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Uranium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium",{ expiresIn : "30d" }

  );
   res.setHeader("x-auth-token", token);
   res.send({ status: true, data: token });
};




const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });


};

  


  const updateUser = async function (req,res){
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user){
    return res.send("No such user exists");
} 
let userData = req.body;
let updateUser = await userModel.findOneAndUpdate({_id: userId},userData);
  res.send({ status: updateUser, data: updateUser });
};



const deleteUser = async function (req,res,next) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDeleted:true},{new:true,upsert:true});
  res.send({ status: updatedUser, data: updatedUser });
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
