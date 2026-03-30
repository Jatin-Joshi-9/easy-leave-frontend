import type { LeaveScope } from "../constants/LeaveStatus";
import type { LeaveResponse, LeaveStatus } from "../types/leaves";
import axiosInstance from "./axiosInstance";

type Props = {
    status?: LeaveStatus;
    scope: LeaveScope;
}

export const fetchLeaves = async ({ status, scope = 'self' }: Props): Promise<LeaveResponse[]> => {
  const params: Record<string, string> = { scope };
  if (status && status !== 'all') params.status = status;

  const { data } = await axiosInstance.get('/api/leaves', { params });
  return data.data; 
};