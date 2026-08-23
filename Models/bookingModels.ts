import { StaticImageData } from "next/image";

export interface ServicesListModels {
  id: number;
  title: string;
  duration: number;
  reserve_fee: number;
}

export interface CategoriesListModels {
  id: number;
  title: string;
  image: StaticImageData;
  services: ServicesEntity[];
}
export interface ServicesEntity {
  id: number;
  title: string;
  duration: number;
  reserve_fee: number;
  image: StaticImageData;
}

export interface StaffListModels {
  id: number;
  first_name: string;
  last_name: string;
  image: StaticImageData;
}

export interface ServiceStaffModels {
  id: number;
  title: string;
  duration: number;
  reserve_fee: number;
  staff: StaffEntity[];
}
export interface StaffEntity {
  id: number;
  first_name: string;
  last_name: string;
  image: StaticImageData;
}

export interface StaffTimesModels {
  id: number;
  first_name: string;
  last_name: string;
  image: StaticImageData;
  slots: SlotsEntity[];
}
export interface SlotsEntity {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
}

export interface CustomerInfoModels {
  user: User;
  appointment?: AppointmentEntity[] | null;
}
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}
export interface AppointmentEntity {
  id: number;
  first_name: string;
  last_name: string;
  slot: Slot;
  service: string;
  booking_source: string;
}
export interface Slot {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
}

export interface AppointmentInfoModels {
  id: number;
  first_name: string;
  last_name: string;
  slot: Slot;
  service: string;
  reserve_fee: string;
  duration: string;
  booking_source: string;
}
export interface Slot {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
}
