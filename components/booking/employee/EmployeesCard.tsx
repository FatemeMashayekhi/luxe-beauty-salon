import { ServiceStaffModels, StaffListModels } from "@/Models/bookingModels";
import axios from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import svgLogo from "@/public/images/services/hair.png";

interface Props {
  handleSelectEmployee: (employee: StaffListModels) => void;
  serviceId: number;
}

export default function EmployeesCard({
  handleSelectEmployee,
  serviceId,
}: Props) {
  const { isLoading, data, error } = useQuery<ServiceStaffModels>({
    queryKey: ["staff-list", serviceId],
    queryFn: async () => {
      const res = await axios.get(`/api/salon/service/${serviceId}`);
      return res.data;
    },
    staleTime: 0,
    refetchOnMount: true,
  });

  if (error) return <div>خطا</div>;

  if (isLoading) return <div>در حال دریافت</div>;

  return (
    <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-8">
      {data?.staff?.map((item) => (
        <div
          key={item.id}
          className="shadow border border-[#E8E8E8] flex justify-between items-center rounded-xl p-2"
        >
          <div className="border rounded-full">
            <Image src={svgLogo} alt={item.first_name} width={80} />
          </div>

          <div className="flex gap-x-1.5">
            <span>{item.first_name}</span>
            <span>{item.last_name}</span>
          </div>
          <div>
            <button
              onClick={() => handleSelectEmployee(item)}
              className="text-white bg-[#EF617D] rounded-xl py-1 px-2"
            >
              انتخاب
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
