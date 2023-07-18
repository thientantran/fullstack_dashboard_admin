import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
      min:2,
      max:100
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min:5
    },
    city:String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin'
    }
  },
  {timestamps:true}
)

const Admin = mongoose.model("Admin", AdminSchema)
export default Admin