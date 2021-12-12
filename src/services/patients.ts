import patients from '../../data/patients';
import { Patient, NewPatient, PublicPatient, NewEntry, Entry } from '../types';
import { v1 as uuid } from 'uuid';

const getNonSSNPatients = () => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const id: string = uuid();
  const newPatient = {
    id,
    ...patient,
    entries: []
  };
  patients.push(newPatient);
  return newPatient;
};

const getPatient = (id: string): PublicPatient | undefined => {
  const patient = patients.find(patient => patient.id === id);
  return patient;
};

const addEntry = (entry: NewEntry, patientId: string): Entry => {
  const id: string = uuid();
  const newEntry = {
    id,
    ...entry
  };
  const index = patients.findIndex(patient => patient.id === patientId);
  if(index !== -1) {
    patients[index].entries.push(newEntry);
  }
  return newEntry;
};

export default { getNonSSNPatients, addPatient, getPatient, addEntry };