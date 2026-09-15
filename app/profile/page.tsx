import AppointmentStats from "@/components/profile/AppointmentStats";
import LogoutBtn from "@/components/profile/LogoutBtn";
import NextAppointment from "@/components/profile/NextAppointment";
import PersonalInformation from "@/components/profile/PersonalInformation";
import ProfileAction from "@/components/profile/ProfileAction";
import ProfileCard from "@/components/profile/ProfileCard";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FCFAFB] px-4 py-5 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <p className="text-sm font-medium text-[#EF617D]">حساب کاربری</p>

          <h1 className="mt-1 text-2xl font-bold text-[#292929]">پروفایل من</h1>

          <p className="mt-1 text-sm text-[#999]">
            اطلاعات شخصی و رزروهای خود را مدیریت کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ProfileCard />
          <AppointmentStats />
          <NextAppointment />
          <PersonalInformation />

          <section>
            <div className="mb-3">
              <h2 className="text-lg font-bold text-[#292929]">
                تنظیمات و دسترسی‌ها
              </h2>

              <p className="mt-1 text-sm text-[#999]">
                تنظیمات حساب و اطلاعات کمکی
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F0E5E8] bg-white">
              <ProfileAction icon="solar:bell-linear" title="اعلان‌ها" />

              <ProfileAction
                icon="solar:question-circle-linear"
                title="سوالات متداول"
              />

              <ProfileAction icon="solar:phone-linear" title="تماس با ما" />

              <ProfileAction
                icon="solar:document-text-linear"
                title="قوانین و حریم خصوصی"
              />
            </div>
          </section>

          <LogoutBtn />
        </div>
      </div>
    </main>
  );
}
