export interface Complaint {
    id?: number;
  date: string;
  time: string;
  ticketNo: string;
  projectName: string;
  moduleName: string;
  subModuleName: string;
  frequency: string;
  priority: string;
  issue: string;
  status: string;
  attachment: string;
  assignUser?: string;
}
