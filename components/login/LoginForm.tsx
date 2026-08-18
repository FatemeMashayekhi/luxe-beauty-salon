"use client";
import { convertToPersianNumbers } from "@/lib/utils";
// import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const LoginSchema = Yup.object({
  phone_number: Yup.string()
    .required("شماره موبایل الزامی است")
    .transform((value) => convertToPersianNumbers(value))
    .matches(
      /^09(0[0-5]|[13]\d|2[0-3]|9[0-9]|41)\d{7}$/,
      "شماره موبایل معتبر نیست",
    ),
});

export interface LoginFormValues {
  phone_number: string;
}

export default function LoginForm() {
  const router = useRouter();

  // const mutation = useMutation({
  //   mutationFn: otpLogin,
  //   onSuccess: () => {
  //     router.push("/login/verify");

  //     toast({
  //       title: "کد با موفقیت ارسال شد.",
  //     });
  //   },
  //   onError: (error: AxiosError) => {
  //     const messages = getErrorMessages(error);
  //     if (error.status === 500) {
  //       toast({
  //         variant: "destructive",
  //         description:
  //           "خطایی در ارتباط با سرور رخ داده ، به پشتیبانی اطلاع دهید.",
  //       });
  //     } else {
  //       toast({
  //         variant: "destructive",
  //         description:
  //           messages[0] || "خطایی در ارسال کد رخ داده ، لطفا دوباره تلاش کنید",
  //       });
  //     }
  //   },
  // });

  const formik = useFormik<LoginFormValues>({
    initialValues: { phone_number: "" },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      const convertedValues = {
        phone_number: convertToPersianNumbers(values.phone_number),
      };
      router.push("/login/verify");
      localStorage.setItem("phoneNumber", values.phone_number);
      console.log(convertedValues);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex-1 w-full flex flex-col lg:gap-y-10"
    >
      <input
        type="text"
        placeholder="09123456789"
        name="phone_number"
        value={formik.values.phone_number}
        onChange={formik.handleChange}
        className={`border-2 rounded-xl p-3 w-full outline-none ${
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

      <button
        type="submit"
        className="mt-auto bg-[#EF617D] text-white rounded-xl py-3 w-full lg:text-lg"
      >
        دریافت کد تایید
      </button>
    </form>
  );
}
