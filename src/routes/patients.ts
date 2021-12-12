import express from 'express';
import { addPatient, getPatients, getPatient, addEntry } from '../controllers/patients';

const router = express.Router();

router.get("/", getPatients);

router.post("/", addPatient);

router.get("/:id", getPatient);

router.post("/:id/entries", addEntry);

export default router;