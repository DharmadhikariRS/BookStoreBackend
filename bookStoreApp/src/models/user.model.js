import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      required:true
    },
    LastName:{
      type: String,
      required:true
    },
    Email:{
       type: String,
       required:true,
       unique:true,
       dropDups:true
      
    },
    Password:{
      type: String,
      required:true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
