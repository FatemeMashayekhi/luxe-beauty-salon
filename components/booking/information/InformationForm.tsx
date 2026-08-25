"use client";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/stores/bookingStore";
import { convertToPersianNumbers } from "@/lib/utils";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object({
  phone_number: Yup.string()
    .required("شماره موبایل الزامی است")
    .transform((value) => convertToPersianNumbers(value))
    .matches(
      /^09(0[0-5]|[13]\d|2[0-3]|9[0-9]|41)\d{7}$/,
      "شماره موبایل معتبر نیست",
    ),
  first_name: Yup.string()
    .required("وارد کردن نام الزامی است")
    .max(37, "نام نمی‌تواند بیشتر از ۳۷ کاراکتر باشد")
    .matches(/^[a-zA-Zآ-ی\s]+$/, "نام باید فقط شامل حروف باشد"),

  last_name: Yup.string()
    .required("وارد کردن نام خانوادگی الزامی است")
    .max(37, "نام خانوادگی نمی‌تواند بیشتر از ۳۷ کاراکتر باشد")
    .matches(/^[a-zA-Zآ-ی\s]+$/, "نام خانوادگی باید فقط شامل حروف باشد"),
});

export interface LoginFormValues {
  phone_number: string;
  first_name: string;
  last_name: string;
}

export default function InformationForm() {
  const router = useRouter();
  const setCustomerInfo = useBookingStore((state) => state.setCustomerInfo);

  const formik = useFormik<LoginFormValues>({
    enableReinitialize: true,
    initialValues: {
      phone_number: "",
      first_name: "",
      last_name: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setCustomerInfo(values.first_name, values.last_name, values.phone_number);

      router.push("/booking/review");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col gap-y-6 lg:gap-y-10 lg:w-[50%]"
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="phone_number" className="hidden lg:block">
          شماره موبایل
        </label>
        <input
          id="phone_number"
          type="text"
          name="phone_number"
          placeholder="شماره موبایل"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          className={`border-2 rounded-xl p-3 w-full ${
            formik.submitCount > 0 && formik.errors.phone_number
              ? "border-red-500"
              : "border-[#E8E8E8]"
          }`}
        />
        {formik.submitCount > 0 && formik.errors.phone_number && (
          <p className="mt-1 text-right text-sm text-red-500">
            {formik.errors.phone_number}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="first_name" className="hidden lg:block">
          نام
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="نام"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          className={`border-2 rounded-xl p-3 w-full ${
            formik.submitCount > 0 && formik.errors.first_name
              ? "border-red-500"
              : "border-[#E8E8E8]"
          }`}
        />
        {formik.submitCount > 0 && formik.errors.first_name && (
          <p className="mt-1 text-right text-sm text-red-500">
            {formik.errors.first_name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="last_name" className="hidden lg:block">
          نام خانوادگی
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="نام خانوادگی"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          className={`border-2 rounded-xl p-3 w-full ${
            formik.submitCount > 0 && formik.errors.last_name
              ? "border-red-500"
              : "border-[#E8E8E8]"
          }`}
        />
        {formik.submitCount > 0 && formik.errors.last_name && (
          <p className="mt-1 text-right text-sm text-red-500">
            {formik.errors.last_name}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-auto bg-[#EF617D] text-white rounded-xl py-3 w-full lg:text-lg"
      >
        ادامه
      </button>
    </form>
  );
}
