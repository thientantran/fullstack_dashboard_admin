import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import Transaction from '../models/Transaction.js';
export const getAdmins = async(req, res) =>{
  try {
    const admins = await Admin.find({role:'admin'}).select("-password");
    res.status(200).json(admins)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getUserPerformace = async(req, res) => {
  try {
    const {id} = req.params;

    //join 2 tables admin và affiliatestats lại với nhau thông qua cột id và userId
    const userWithStats = await Admin.aggregate([
      {$match: {_id: new mongoose.Types.ObjectId(id)}},
      {
        $lookup: {
          from: "affiliatestats",
          localField:"_id",
          foreignField:'userId',
          as:'affiliateStats'
        }
      },
      {$unwind:'$affiliateStats'}
      // phải có dấu $ phía trước
    ]);
    //userWithStats này là ở dạng arrray, do đó cần lấy 0 để lấy cái object ra ngoài
    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id)=>{
        return Transaction.findById(id);
      })
    )
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    )

    res.status(200).json({user: userWithStats[0], sales: filteredSaleTransactions})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}