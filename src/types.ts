export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type Diagnosis = {
  code: string,
  name: string,
  latin?: string
};

// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface Entry {

// }

export type Patient = {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string,
  entries: Entry[],
};

export type NewPatient = Omit<Patient, "id">;

export type PatientWithoutSsn = Omit<Patient, 'ssn'>;

export type NewPatientFields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown, entries: unknown };

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;

export type Response = {
  send: (arg: unknown) => void;
  json: (arg: unknown) => void;
  status: (num: number) => void; 
};

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating?: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry {
  type: 'Hospital',
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare',
}

export enum EntryType {
  HealthCheck = 'HealthCheck',
  Hospital = 'Hospital',
  OccupationalHealthcare = 'OccupationalHealthcare'
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;


export type NewEntry = Omit<Entry, 'id'>;

export type NewEntryFields = { 
  description: unknown, 
  date: unknown, 
  specialist: unknown, 
  diagnosisCodes?: unknown, 
  healthCheckRating?: unknown,
  type: unknown,
};
