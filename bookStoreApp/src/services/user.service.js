import User from '../models/user.model';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//Login  users by Email
export const login = async (body) => {
  const data = await User.findOne({Email: body.Email});
if(data !== null){
  const PasswordMatch= await bcrypt.compare(body.Password,data.Password);
  //console.log(PasswordMatch)
  if(PasswordMatch){
  let token = jwt.sign({ Email: data.Email, id:data._id}, process.env.SECRET_KEY);
  return token;
  }
  else{
  throw new Error("Invalid Password");
      }
}
else{
  throw new Error("Invalid Email");
    }
 
};

//create new user
export const Register = async (body) => {
  
  const HashPassword=await bcrypt.hash(body.Password,12);
  body.Password=HashPassword;
  const data = await User.create(body);
  // producer("User successfully created");
  return data;
};

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
