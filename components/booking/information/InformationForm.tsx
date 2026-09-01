"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
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

  const getInputClass = (field: keyof LoginFormValues) => {
    const hasError = formik.submitCount > 0 && formik.errors[field];

    return [
      "h-14 w-full rounded-2xl border bg-white px-4 text-sm text-[#1E1E1E]",
      "outline-none transition-all duration-200",
      "placeholder:text-[#B5B5B5]",
      "focus:ring-4",
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-[#E8E8E8] focus:border-[#EF617D] focus:ring-[#EF617D]/10",
    ].join(" ");
  };

  return (
    <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-5">
      <div>
        <label
          htmlFor="phone_number"
          className="mb-2.5 block text-sm font-semibold text-[#1E1E1E]"
        >
          شماره موبایل
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#9A9A9A]">
            <Icon icon="solar:phone-linear" width={20} height={20} />
          </span>
          <input
            id="phone_number"
            type="tel"
            name="phone_number"
            inputMode="numeric"
            dir="ltr"
            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            className={`${getInputClass("phone_number")} pr-12`}
          />
        </div>
        {formik.submitCount > 0 && formik.errors.phone_number && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
            <Icon icon="solar:danger-circle-linear" width={15} height={15} />

            <p>{formik.errors.phone_number}</p>
          </div>
        )}
      </div>
      <div>
        <label
          htmlFor="first_name"
          className="mb-2.5 block text-sm font-semibold text-[#1E1E1E]"
        >
          نام
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#9A9A9A]">
            <Icon icon="solar:user-linear" width={20} height={20} />
          </span>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="مثلاً مریم"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            className={`${getInputClass("first_name")} pr-12`}
          />
        </div>
        {formik.submitCount > 0 && formik.errors.first_name && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
            <Icon icon="solar:danger-circle-linear" width={15} height={15} />

            <p>{formik.errors.first_name}</p>
          </div>
        )}
      </div>
      <div>
        <label
          htmlFor="last_name"
          className="mb-2.5 block text-sm font-semibold text-[#1E1E1E]"
        >
          نام خانوادگی
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#9A9A9A]">
            <Icon icon="solar:user-rounded-linear" width={20} height={20} />
          </span>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="مثلاً احمدی"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            className={`${getInputClass("last_name")} pr-12`}
          />
        </div>
        {formik.submitCount > 0 && formik.errors.last_name && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
            <Icon icon="solar:danger-circle-linear" width={15} height={15} />

            <p>{formik.errors.last_name}</p>
          </div>
        )}
      </div>
      <div className="flex items-start gap-3 rounded-2xl border border-[#F6D7CC] bg-[#FFF8F5] p-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCEAE4] text-[#EF617D]">
          <Icon icon="solar:shield-check-linear" width={18} height={18} />
        </div>

        <p className="text-xs leading-6 text-[#666666]">
          اطلاعات شما نزد سالن زیبایی لوکس محفوظ می‌ماند و فقط برای ثبت و مدیریت
          نوبت استفاده خواهد شد.
        </p>
      </div>
      <button
        type="submit"
        className="group mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#EF617D] text-sm font-bold text-white shadow-[0_10px_25px_rgba(239,97,125,0.18)] transition-all duration-200 hover:bg-[#E85372] hover:shadow-[0_14px_30px_rgba(239,97,125,0.25)] active:scale-[0.99]"
      >
        <span>ادامه و بررسی رزرو</span>
        <Icon
          icon="solar:arrow-left-linear"
          width={19}
          height={19}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
      </button>
      <p className="text-center text-[11px] leading-6 text-[#9A9A9A]">
        در مرحله بعد اطلاعات رزرو خود را بررسی خواهید کرد.
      </p>
    </form>
  );
}
