import Admin from "../models/Admin.js";

export const getAllUser = async(req, res) => {
  try {
    const data = await Admin.find()
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json({message: error.message})
  }
}

export const getUser = async(req, res) => {
  try {
    const {id} = req.params
    const admin = await Admin.findById(id)
    res.status(200).json(admin)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}