import diagnoses from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = (_req: unknown, res: { send: (diagnoses: Diagnosis[]) => void; }) => {
  res.send(diagnoses);
};

export { getDiagnoses };