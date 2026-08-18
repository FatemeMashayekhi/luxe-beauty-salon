import axios from "@/api/axios";
import {
  AppointmentInfoModels,
  CategoriesListModels,
  CustomerInfoModels,
  ServicesListModels,
  StaffListModels,
  StaffTimesModels,
  User,
} from "@/Models/bookingModels";
import {
  APPOINTMENT_URL,
  CATEGORIES_LIST_URL,
  OTP_LOGIN_URL,
  SERVICES_LIST_URL,
  STAFF_LIST_URL,
  VERIFY_OTP_URL,
} from "./endpoints";

export const getServicesList = async (): Promise<ServicesListModels[]> => {
  const response = await axios.get(SERVICES_LIST_URL);
  return response.data;
};

export const getCategoriesList = async (): Promise<CategoriesListModels[]> => {
  const response = await axios.get(CATEGORIES_LIST_URL);
  return response.data;
};

export const getStaffList = async (): Promise<StaffListModels[]> => {
  const response = await axios.get(STAFF_LIST_URL);
  return response.data;
};

export async function getStaffSchedule(id: number) {
  const { data } = await axios.get<StaffTimesModels>(`/api/salon/staff/${id}/`);
  return data;
}

export async function getMe() {
  const { data } = await axios.get<CustomerInfoModels>("/api/core/me");
  return data;
}

export async function updateMe(body: Partial<User>) {
  const { data } = await axios.patch<CustomerInfoModels>("/api/core/me", body);
  return data;
}

export const createAppointment = async (data: {
  service_id: number;
  slot_id: number;
}) => {
  const res = await axios.post(APPOINTMENT_URL, data);
  return res.data;
};

export async function getAppointmentInfo(id: number) {
  const { data } = await axios.get<AppointmentInfoModels>(
    `/api/salon/appointment/${id}/`,
  );
  return data;
}

export const otpLogin = async (data: { phone_number: string }) => {
  const response = await axios.post(OTP_LOGIN_URL, data, { lang: "fa" });
  return response.data;
};

export const otpVerify = async (data: {
  phone_number: string;
  code: string;
}) => {
  const response = await axios.post(VERIFY_OTP_URL, data, { lang: "fa" });
  return response.data;
};
