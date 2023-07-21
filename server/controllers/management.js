import Admin from '../models/Admin.js';
export const getAdmins = async(req, res) =>{
  try {
    const admins = await Admin.find({role:'admin'}).select("-password");
    res.status(200).json(admins)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}