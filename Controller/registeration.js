const { User } = require("../model/Registeration");
const jwt = require("jsonwebtoken");
const nodemailer=require('nodemailer')

const register = async (req, res) => {
  const { name, email, phoneNumber, address, password, confirmPassword } =
    req.body;
  const user = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    password: password,
    confirmPassword: confirmPassword,
  };
  let userExists;
  try {
    userExists = await User.findOne({
      where: { email },
    });
  } catch (error) {
    return res.status(400).json({ message: "User Already  Exist " });
  }

  if (userExists)
    return res.status(422).json({ message: "Email is Already Exists" });
  // if (password === confirmPassword) {
    try {
      await User.create(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Something went wrong" });
    }
  // } else {
  //   return res.status(400).json("your password does not match ");
  // }

  res.status(200).json("User Successfully Registerted");
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("logged ins");
  let userinfo;
  console.log(email, password);
  try {
    userinfo = await User.findOne({ where: { email } });
    console.log("userinfo", userinfo.password, userinfo.email);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
  const token = jwt.sign(
    {
      email: userinfo.email,
      user_id: userinfo.id,
    },
    "MySecretKey",
    {
      expiresIn: "1h",
    }
  );
  console.log('Token-->',token)

  //   if(!userinfo){ return res.status(400).json('Wrong Credentials')}
  //   if(userinfo.password !== password){return res.status(403).json('match does not matched')}
  res.status(200).json({data:"User Successfully Login",token:token});
};

module.exports = { register, login };
