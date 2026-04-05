import type { UserResponse } from "@/types/Users";
import axiosInstance from "./axiosInstance";

type EmployeeParams = {
  page?: number;
  size?: number;
};

export const getEmployees = async ( params: EmployeeParams ): Promise<UserResponse[]> => {
  const { data } = await axiosInstance.get('/api/users', { params });

  if (!data.success) {
    console.error('Error fetching employees:', data.message);
    throw new Error(data.message || 'Failed to fetch employees');
  }

  return data.data;
};