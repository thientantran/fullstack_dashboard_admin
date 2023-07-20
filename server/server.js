import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import helmet from 'helmet'
import mongoose from "mongoose"
import morgan from 'morgan'
// import { dataTransaction } from "./data.js"
// import Transaction from "./models/Transaction.js"
import clientRouter from "./routes/client.js"
import generalRouter from "./routes/general.js"
import saleRouter from "./routes/sales.js"
// CONFIGURATIONS

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// ROUTES
app.use("/general", generalRouter)
app.use("/client", clientRouter)
app.use("/sales", saleRouter)

const PORT = process.env.PORT || 9000

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  app.listen(PORT, ()=> console.log(`Listening on port:${PORT} `))
  // Admin.insertMany(dataUser);
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverallStat.insertMany(dataOverallStat)
}).catch((error) => console.log(`error: ${error}`))