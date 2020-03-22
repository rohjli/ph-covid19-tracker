export interface CaseDataResult {
  caseNo: number;
  date: Date | null;
  age: number;
  gender: string;
  nationality: string;
  admittedHospital: string;
  hasTravelledAbroad: boolean;
  status: string;
  otherInfo: string;
}

export interface CaseDataProps {
  data: Array<CaseDataResult>;
}
