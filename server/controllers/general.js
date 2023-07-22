import Admin from "../models/Admin.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

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

export const getDashboardStats = async(req, res) => {
  try {
    const currentMonth = "November"
    const currentYear = '2021'
    const currentDay = "2021-11-15"

    const transactions = await Transaction.find().limit(50).sort({createdOn:-1});

    const overallStat = await OverallStat.find({year: currentYear});

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    }= overallStat[0];
    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}