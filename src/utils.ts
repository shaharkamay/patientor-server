import { NewPatient, NewPatientFields, NewEntryFields, Gender, Entry, NewEntry, EntryType } from './types';

const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: NewPatientFields): NewPatient => {
  const newPatient: NewPatient = {
    name: parseString(name),
    dateOfBirth: parseDate(dateOfBirth),
    ssn: parseString(ssn),
    gender: parseGender(gender),
    occupation: parseString(occupation),
    entries: [],
  };

  return newPatient;
};

const toNewEntry = ({ description, date, specialist, diagnosisCodes, type }: NewEntryFields): NewEntry => {
  const newEntry: NewEntry = {
    description: parseString(description),
    date: parseDate(date),
    specialist: parseString(specialist),
    diagnosisCodes: parseDiagnosisCodes(diagnosisCodes),
    type: parseEntryType(type),
  };
  return newEntry;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export const parseString = (str: unknown): string => {
  if (!str || !isString(str)) {
    throw new Error('Incorrect or missing string');
  }

  return str;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if(!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const isEntries = (entries: unknown): entries is Entry[]  => {
  return typeof entries === 'object' || entries instanceof Array;
};

export const parseEntries = (entries: unknown): Entry[] => {
  if (!entries || !isEntries(entries)) {
    throw new Error(`Incorrect or missing entries: ${entries}`);
  }
  return entries;
};

const isDiagnosisCodes = (codes: unknown): codes is []  => {
  return typeof codes === 'object' || codes instanceof Array;
};

const parseDiagnosisCodes = (codes: unknown): [] => {
  if (!codes || !isDiagnosisCodes(codes)) {
    throw new Error(`Incorrect or missing codes: ${codes}`);
  }
  return codes;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEntryType = (param: any): param is EntryType => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(EntryType).includes(param);
};

const parseEntryType = (entryType: unknown): EntryType => {
  if(!entryType || !isEntryType(entryType)) {
    throw new Error('Incorrect or missing health Check Rating: ' + entryType);
  }
  return entryType;
};

export { toNewPatient, toNewEntry };