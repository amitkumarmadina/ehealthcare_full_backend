
import express from "express"
import { getDoctorById, getDoctors } from "../controllers/doctorController.js"

const router = express.Router()

router.get("/",     getDoctors)
router.get("/:id",  getDoctorById)
// router.post("/",    addDoctor)

export default router
