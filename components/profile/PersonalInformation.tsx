import ProfileRow from "./ProfileRow";

export default function PersonalInformation() {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-lg font-bold text-[#292929]">اطلاعات شخصی</h2>

        <p className="mt-1 text-sm text-[#999]">
          اطلاعات حساب خود را مدیریت کنید.
        </p>
      </div>

      <div className="divide-y divide-[#F1EEEE] rounded-3xl border border-[#F0E5E8] bg-white px-4">
        <ProfileRow
          icon="solar:user-linear"
          title="نام و نام خانوادگی"
          value="فاطمه مشایخی"
        />

        <ProfileRow
          icon="solar:phone-linear"
          title="شماره موبایل"
          value="۰۹۱۲۱۲۳۴۵۶۷"
        />

        <ProfileRow icon="bi:cake" title="تاریخ تولد" value="ثبت نشده" />
      </div>
    </section>
  );
}
