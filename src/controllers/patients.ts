import { NewEntryFields, NewPatientFields, Response } from '../types';
import patientService from '../services/patients';
import { parseString, toNewEntry, toNewPatient } from '../utils';

const getPatients = (_req: unknown, res: Response) => {
  res.send(patientService.getNonSSNPatients());
};

const addPatient = (req: {body: NewPatientFields}, res: Response) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400);
    res.send(errorMessage);
  }
};

const getPatient = (req: {params: {id: string}}, res: Response) => {
  try {
    const id = req.params.id;
    res.send(patientService.getPatient(id));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400);
    res.send(errorMessage);
  }
};

const addEntry = (req: {body: NewEntryFields, params: {id: unknown} }, res: Response) => {
  try {
    const newEntry = toNewEntry(req.body);
    const patientId = parseString(req.params.id);
    const addedEntry = patientService.addEntry(newEntry, patientId);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400);
    res.send(errorMessage);
  }
};

export { getPatients, addPatient, getPatient, addEntry };