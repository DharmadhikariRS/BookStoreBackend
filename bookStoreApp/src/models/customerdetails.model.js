import { Schema, model } from 'mongoose';

const customerdetailsSchema = new Schema(
  {
    FirstName: {
      type: String,
      required:true
    },
    MobileNumber:{
      type: Number,
      required:true
    },
    Address:[{
        type: {
            type: String
          },
          address: {
            type: String
          },
    }]  ,
    Password:{
      type: String,
      required:true
    }
  },
  {
    timestamps: true
  }
);

export default model('Customerdetails', customerdetailsSchema);