import express from "express";
import { getAllUser, getUser } from "../controllers/general.js";

const generalRouter = express.Router()

generalRouter.get("/admin/:id", getUser)
generalRouter.get("/admin/", getAllUser)

export default generalRouter;