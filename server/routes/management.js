import expess from "express";
import { getAdmins } from "../controllers/management.js";
const managementRouter = expess.Router()

managementRouter.get("/admins", getAdmins);
export default managementRouter