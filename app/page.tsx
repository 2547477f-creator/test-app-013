import { LayoutGrid, Users, Settings, Bell, BookOpen, GraduationCap, Calendar } from 'lucide-react';

export default function StudentDashboard() {
  return (
    // ส่วนพื้นหลังหลัก ใช้ไล่ระดับสีอ่อนๆ (Gradient Background)
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      
      {/* 1. Sidebar - ใช้สีน้ำเงินเข้มแบบ Facebook */}
      <aside className="w-72 bg-[#1877F2] text-white p-6 flex flex-col shadow-xl">
        <div className="flex items-center gap-3 mb-12 px-2">
          <GraduationCap size={32} strokeWidth={2.5} />
          <h1 className="text-2xl font-bold tracking-tight">UniLife</h1>
        </div>
        
        <nav className="space-y-2 flex-grow">
          <NavItem icon={<LayoutGrid size={20}/>} label="แผงควบคุม" active />
          <NavItem icon={<BookOpen size={20}/>} label="คอร์สเรียน" />
          <NavItem icon={<Calendar size={20}/>} label="ตารางเรียน" />
          <NavItem icon={<Users size={20}/>} label="กลุ่มการเรียน" />
        </nav>

        <div className="mt-auto pt-6 border-t border-blue-400/30">
          <NavItem icon={<Settings size={20}/>} label="ตั้งค่า" />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* 2. Header - มินิมอลขาวใส (Glassmorphism) */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-blue-100 py-4 px-8 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">ยินดีต้อนรับ, นศ. 2547477f</h2>
            <p className="text-sm text-gray-500">วันพุธที่ 18 กุมภาพันธ์ 2026</p>
          </div>
          <div className="flex items-center gap-5">
            <button className="relative p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 border-2 border-white shadow-md cursor-pointer"></div>
          </div>
        </header>

        {/* 3. Page Content */}
        <main className="p-8 space-y-8">
          
          {/* Stats Section - บัตรตัวเลขแบบมี Gradient อ่อนๆ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="วิชาที่เรียน" value="6" sub="เทอมนี้" color="from-blue-500 to-blue-700" />
            <StatCard label="ชั่วโมงเรียนรวม" value="18" sub="ชม./สัปดาห์" color="from-blue-400 to-blue-600" />
            <StatCard label="เกรดเฉลี่ยสะสม" value="3.75" sub="GPAX" color="from-blue-300 to-blue-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ตารางเรียนวันนี้ */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-blue-50 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
                ตารางเรียนวันนี้
              </h3>
              <div className="space-y-4">
                <ScheduleItem time="09:00 - 12:00" subject="Computer Science" room="SC-102" />
                <ScheduleItem time="13:30 - 15:30" subject="UI/UX Design" room="Lab 4" />
              </div>
            </div>

            {/* การแจ้งเตือนงาน */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-6 rounded-2xl text-white shadow-lg">
              <h3 className="text-lg font-bold mb-4">งานที่ต้องส่ง 📝</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-xs text-blue-100">พรุ่งนี้, 23:59</p>
                  <p className="font-medium">Final Project Next.js</p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-xs text-blue-100">21 ก.พ.</p>
                  <p className="font-medium">Database Homework</p>
                </div>
              </div>
              <button className="w-full mt-6 py-2 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Components ย่อยเพื่อให้โค้ดสะอาดขึ้น ---

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-white text-blue-600 shadow-md font-bold' : 'text-blue-100 hover:bg-blue-500 hover:text-white'}`}>
      {icon} {label}
    </a>
  );
}

function StatCard({ label, value, sub, color }: any) {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform`}>
      <p className="text-blue-100 text-sm font-medium">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-4xl font-bold">{value}</p>
        <p className="text-xs text-blue-100 opacity-80">{sub}</p>
      </div>
    </div>
  );
}

function ScheduleItem({ time, subject, room }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
      <div className="flex gap-4 items-center">
        <div className="text-sm font-bold text-blue-600 w-24">{time}</div>
        <div>
          <p className="font-bold text-gray-800">{subject}</p>
          <p className="text-xs text-gray-500">{room}</p>
        </div>
      </div>
      <button className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold">เช็คชื่อ</button>
    </div>
  );
}