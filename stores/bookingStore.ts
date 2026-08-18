import { create } from "zustand";
import { persist } from "zustand/middleware";

type Service = {
  id: number;
  title: string;
  duration: number;
  price: number;
};

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  image: string | null;
};

type BookingStore = {
  service: Service | null;

  employee: Employee | null;

  date: string | null;

  time: string | null;

  slotId: number | null;

  reservationId: string | null;

  expiresAt: string | null;

  customer: {
    first_name: string;
    last_name: string;
    phoneNumber: string;
  };

  appointmentId: number | null;

  setAppointmentId: (id: number | null) => void;

  isBookingValid: () => boolean;

  setService: (service: Service) => void;

  setEmployee: (employee: Employee) => void;

  setDate: (date: string) => void;

  setTime: (time: string | null) => void;

  setSlotId: (slotId: number | null) => void;

  setReservation: (reservationId: string, expiresAt: string) => void;

  setCustomerInfo: (
    last_name: string,
    first_name: string,
    phoneNumber: string,
  ) => void;

  resetBooking: () => void;
};

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      service: null,
      employee: null,

      date: null,
      time: null,
      slotId: null,
      appointmentId: null,

      reservationId: null,
      expiresAt: null,

      customer: {
        last_name: "",
        first_name: "",
        phoneNumber: "",
      },

      isBookingValid: () => {
        const { service, employee, date, time, slotId } = get();

        return Boolean(service && employee && date && time && slotId);
      },

      setService: (service) =>
        set({
          service,

          employee: null,
          date: null,
          time: null,

          reservationId: null,
          expiresAt: null,
        }),

      setAppointmentId: (id) =>
        set({
          appointmentId: id,
        }),

      setEmployee: (employee) =>
        set({
          employee,

          date: null,
          time: null,

          reservationId: null,
          expiresAt: null,
        }),

      setDate: (date) =>
        set({
          date,
          time: null,
        }),

      setTime: (time) =>
        set({
          time,
        }),

      setSlotId: (slotId) =>
        set({
          slotId,
        }),

      setReservation: (reservationId, expiresAt) =>
        set({
          reservationId,
          expiresAt,
        }),

      setCustomerInfo: (first_name, last_name, phoneNumber) =>
        set({
          customer: {
            first_name,
            last_name,
            phoneNumber,
          },
        }),

      resetBooking: () =>
        set({
          service: null,
          employee: null,

          date: null,
          time: null,
          slotId: null,
          appointmentId: null,

          reservationId: null,
          expiresAt: null,

          customer: {
            last_name: "",
            first_name: "",
            phoneNumber: "",
          },
        }),
    }),
    {
      name: "booking-storage",
    },
  ),
);
