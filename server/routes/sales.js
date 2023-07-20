import express from "express"
import { getSales } from "../controllers/sales.js"

const saleRouter = express.Router()

saleRouter.get("/sales", getSales)

export default saleRouter