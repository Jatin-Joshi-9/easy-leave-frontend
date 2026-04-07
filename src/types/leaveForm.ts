import type { DateRange } from 'react-day-picker';
import type { DurationType } from './leaves';

export type LeaveFormValues = {
  leaveCategoryId: string;
  dateRange: DateRange | undefined;
  startTime: string;
  duration: DurationType;
  description: string;
};
